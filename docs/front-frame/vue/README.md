# VUE

## 浅谈Vue双向绑定原理
​
**渐进式框架**<br/>
注明:以下主要内容来自《深入浅出Vue.js》

所谓渐进式框架,就是把框架分层,所谓分层,就是说你既可以用最核心的视图层渲染功能来快速开发一些需求,也可以用一整套全家桶来开发大型应用。

**Vue特点**<br/>
vue学习成本低，vue.js更轻更快了,但应该意识到一点:并不是因为引用了虚拟Dom而让渲染更快了,80%场景是快了,20%是变慢了。

**变化侦测**<br/>
变化侦测是响应式系统的核心，特点：侦测数据的变化，当数据变化时，会通知视图更新。

**object的变化侦测**<br/>
如何确定状态中发生了变化？------变化侦测

**关于内存消耗**<br/>
vue2.0引入了虚拟Dom将粒度（侦测的尺度）调整为中等粒度，即一个状态绑定了依赖，不再是具体的Dom节点，而是一个组件。当状态改变后，会通知组件，组件内部再使用虚拟Dom进行比对,从而降低依赖量和内存消耗。

**如何追踪变化？**<br/>
有两种方法：

        1.Object.defineProperty

        2.ES6的proxy

**入门例子**<br/>
``` js
<script>
	function defineReactive(data,key,val){
		Object.defineProperty(data,key,{
			enumerable:true,//可枚举,即可以v-for
			configurable:true,//可配置
			get:function(){
				return val
			},
			set:function(newVal){
				if(val===newVal){
					return
				}
				val=newVal
			}
		})
	}
<script>
```
上面只是一个简单的入门例子,源码中当然没有这么简单。解释一下该函数：该函数定义了一个响应式式数据，在这个函数中进行变化追踪，封装好之后，每当从data的key中读取数据时，get函数被触发；当往data的key中设置数据时，set函数触发

**如何收集依赖？**<br/>
观察数据的目的是：当数据的属性变化时，可以通知那些曾经使用了该数据的地方

**例子：**<br/>
``` js
<template>
    <h1>{{name}}</h1>
</template>
```
先收集依赖,即把用到数据name的地方收集起来,然后等属性发生变化时,把之前收集好的依赖循环触发一遍。

总结一句话：把getter中收集的依赖，在setter中触发。

**例子2：**<br/>
我们修改入门例子
``` js
	function defineReactive(data,key,val){
		let dep = new Dep() //修改
		Object.defineProperty(data,key,{
			enumerable:true,//可枚举,即可以v-for
			configurable:true,//可配置
			get:function(){
				dep.depend() //收集依赖
				return val
			},
			set:function(newVal){
				if(val===newVal){
					return
				}
				val=newVal
				dep.notify()//新增依赖
			}
		})
	}
``` 
**Watcher（观察者）：**<br/>
watcher相当于一个中介角色，数据发生变化时通知它，然后它再通知其他地方。

**模型**<br/>
```js
vm.$watch('a.b.c',function(newVal,oldval){
    //做点什么
})
```
以上代码表示,当data.a.b.c属性发生变化时,触发第二个参数中的函数。

**watcher的方法**<br/>
```js
export default class Watcher{
    constructor(vm,expOrFn,cb){
        this.vm = vm
        this.getter = parsePath(expOrFn)//vue中定义的一个方法
        this.cb = cb    
        this.value = this.get()
  }
    get(){
    window.target = this //关键句:当数据被读取即会触发该方法
    let value = this.getter.call(this.vm,this.vm)
    window.target = undefined
    return value
 }
    update(){
    const oldValue = this.value
        this.value = this.get()
        this.cb.call(this.vm,this.value,oldValue)
 }
}
```
因为在get方法中先把window.target设置成了this,也就是当前实例,然后再读一下data.a.b.c的值,这肯定会触发getter,触发了getter,就会触发收集依赖的逻辑(这里我也没搞懂,大概要看一下js高程)

**Observer:**<br/>
上面的watcher只是侦测一个属性的变化,observer会将一个数据内的所有属性(包括子属性)都会转成getter/setter方法,去追踪它们。

即：只要我们将一个object传到Observer中，那么这个object就会变成响应式的object。

**注意：**<br/>
Vue使用以上模式可以追踪一个属性是否被修改，无法追踪该属性是否新增或删除，解决方法：使用vm.$set跟Vm.$delete

**图论:**<br/>

![avatar](https://img-blog.csdnimg.cn/3e98f250653f45b6a8c7516822f54941.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA56m55YiA,size_20,color_FFFFFF,t_70,g_se,x_16)
Data通过observer转换成了getter/setter的形式追踪变化,当外界通过

Watcher读取数据时,会触发getter从而将watcher添加到依赖中,当数据发生了变化时,会触发setter,从而向Dep中的依赖(Watcher)发送通知。Watcher接收到通知后，会向外界发送通知，变化通知到外界后可能会触发视图更新