(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{665:function(E,v,_){"use strict";_.r(v);var t=_(74),a=Object(t.a)({},(function(){var E=this,v=E._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":E.$parent.slotKey}},[v("h2",{attrs:{id:"异步处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#异步处理"}},[E._v("#")]),E._v(" 异步处理")]),E._v(" "),v("p",[E._v("场景说明：用户注册后，需要发注册邮件和注册短信。传统的做法有两种 1.串行的方式；2.并行方式")]),E._v(" "),v("ul",[v("li",[v("p",[E._v("串行方式：将注册信息写入数据库成功后，发送注册邮件，再发送注册短信。以上三个任务全部完成后，返回给客户端。")]),E._v(" "),v("p",[v("img",{attrs:{src:"/rabbitmq/%E5%88%9D%E8%AF%86%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/%E5%BC%82%E6%AD%A5%E5%A4%84%E7%90%86-%E4%B8%B2%E8%A1%8C%E6%96%B9%E5%BC%8F.png",alt:"异步处理-串行方式"}})])]),E._v(" "),v("li",[v("p",[E._v("并行方式：将注册信息写入数据库成功后，发送注册邮件的同时，发送注册短信。以上三个任务完成后，返回给客户端。与串行的差别是，并行的方式可以提高处理效率。")]),E._v(" "),v("p",[v("img",{attrs:{src:"/rabbitmq/%E5%88%9D%E8%AF%86%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/%E5%BC%82%E6%AD%A5%E5%A4%84%E7%90%86-%E5%B9%B6%E8%A1%8C%E6%96%B9%E5%BC%8F.png",alt:"异步处理-并行方式"}})])])]),E._v(" "),v("p",[E._v("假设三个业务节点每个使用50毫秒钟，不考虑网络等其他开销，则串行方式的时间是150毫秒，并行的时间可能是100毫秒。\n因为CPU在单位时间内处理的请求数是一定的，假设CPU在1秒内吞吐量是1000次。则串行方式1秒内CPU可处理的请求量是7次（1000/150）。并行方式处理的请求量是10次（1000/100）\n小结：如以上案例描述，传统的方式系统的性能（并发量，吞吐量，响应时间）会有瓶颈。如何解决这个问题呢？")]),E._v(" "),v("p",[E._v("引入消息队列，将不是必须的业务逻辑异步处理。改造后的架构如下：")]),E._v(" "),v("p",[v("img",{attrs:{src:"/rabbitmq/%E5%88%9D%E8%AF%86%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/%E5%BC%82%E6%AD%A5%E5%A4%84%E7%90%86-%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97.png",alt:"异步处理-消息队列"}})]),E._v(" "),v("p",[E._v("按照以上约定，用户的响应时间相当于是注册信息写入数据库的时间，也就是50毫秒。注册邮件，发送短信写入消息队列后，直接返回，因此写入消息队列的速度很快，基本可以忽略，因此用户的响应时间可能是50毫秒。因此架构改变后，系统的请求量提高到20次。比串行提高了3倍，比并行提高了两倍。")]),E._v(" "),v("h2",{attrs:{id:"应用解耦"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#应用解耦"}},[E._v("#")]),E._v(" 应用解耦")]),E._v(" "),v("p",[E._v("场景说明：用户下单后，订单系统需要通知库存系统。传统的做法是，订单系统调用库存系统的接口。 如下图：")]),E._v(" "),v("p",[v("img",{attrs:{src:"/rabbitmq/%E5%88%9D%E8%AF%86%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/%E5%BA%94%E7%94%A8%E8%A7%A3%E8%80%A6-%E7%9B%B4%E6%8E%A5%E8%B0%83%E7%94%A8.png",alt:"应用解耦-直接调用"}})]),E._v(" "),v("p",[E._v("传统模式的缺点：假如库存系统无法访问，则订单减库存将失败，从而导致订单失败，订单系统与库存系统耦合。")]),E._v(" "),v("p",[E._v("如何解决以上问题呢？引入应用消息队列后的方案，如下图：")]),E._v(" "),v("p",[v("img",{attrs:{src:"/rabbitmq/%E5%88%9D%E8%AF%86%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/%E5%BA%94%E7%94%A8%E8%A7%A3%E8%80%A6-%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97.png",alt:"应用解耦-消息队列"}})]),E._v(" "),v("p",[E._v("订单系统：用户下单后，订单系统完成持久化处理，将消息写入消息队列，返回用户订单下单成功。")]),E._v(" "),v("p",[E._v("库存系统：订阅下单的消息，采用拉/推的方式，获取下单信息，库存系统根据下单信息，进行库存操作。")]),E._v(" "),v("p",[E._v("假如：在下单时库存系统不能正常使用。也不影响正常下单，因为下单后，订单系统写入消息队列就不再关心其他的后续操作了。实现订单系统与库存系统的应用解耦。")]),E._v(" "),v("h2",{attrs:{id:"流量削峰"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#流量削峰"}},[E._v("#")]),E._v(" 流量削峰")]),E._v(" "),v("p",[E._v("流量削锋也是消息队列中的常用场景，一般在秒杀或团抢活动中使用广泛。")]),E._v(" "),v("p",[E._v("应用场景：秒杀活动，一般会因为流量过大，导致流量暴增，应用挂掉。为解决这个问题，一般需要在应用前端加入消息队列。")]),E._v(" "),v("ul",[v("li",[E._v("可以控制活动的人数")]),E._v(" "),v("li",[E._v("可以缓解短时间内高流量压垮应用")])]),E._v(" "),v("p",[v("img",{attrs:{src:"/rabbitmq/%E5%88%9D%E8%AF%86%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/%E6%B5%81%E9%87%8F%E5%89%8A%E5%B3%B0-%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97.png",alt:"流量削峰-消息队列"}})]),E._v(" "),v("p",[E._v("用户的请求，服务器接收后，首先写入消息队列。假如消息队列长度超过最大数量，则直接抛弃用户请求或跳转到错误页面。秒杀业务根据消息队列中的请求信息，再做后续处理.")]),E._v(" "),v("h2",{attrs:{id:"日志处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#日志处理"}},[E._v("#")]),E._v(" 日志处理")]),E._v(" "),v("p",[E._v("日志处理是指将消息队列用在日志处理中，比如Kafka的应用，解决大量日志传输的问题。架构简化如下：")]),E._v(" "),v("p",[v("img",{attrs:{src:"/rabbitmq/%E5%88%9D%E8%AF%86%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/%E6%97%A5%E5%BF%97%E5%A4%84%E7%90%86-%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97.png",alt:"日志处理-消息队列"}})]),E._v(" "),v("ul",[v("li",[E._v("日志采集客户端：负责日志数据采集，定时写受写入Kafka队列")]),E._v(" "),v("li",[E._v("Kafka消息队列：负责日志数据的接收，存储和转发")]),E._v(" "),v("li",[E._v("日志处理应用：订阅并消费kafka队列中的日志数据")])]),E._v(" "),v("h2",{attrs:{id:"消息通讯"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消息通讯"}},[E._v("#")]),E._v(" 消息通讯")]),E._v(" "),v("p",[E._v("消息通讯是指，消息队列一般都内置了高效的通信机制，因此也可以用在纯的消息通信。比如实现点对点消息队列，或者聊天室等。")]),E._v(" "),v("ul",[v("li",[v("p",[E._v("点对点通讯：")]),E._v(" "),v("p",[v("img",{attrs:{src:"/rabbitmq/%E5%88%9D%E8%AF%86%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/%E6%B6%88%E6%81%AF%E9%80%9A%E8%AE%AF-%E7%82%B9%E5%AF%B9%E7%82%B9%E9%80%9A%E8%AE%AF.png",alt:"点对点通讯"}})]),E._v(" "),v("p",[E._v("客户端A和客户端B使用同一队列，进行消息通讯。")])]),E._v(" "),v("li",[v("p",[E._v("聊天室通讯：")]),E._v(" "),v("p",[v("img",{attrs:{src:"/rabbitmq/%E5%88%9D%E8%AF%86%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/%E6%B6%88%E6%81%AF%E9%80%9A%E8%AE%AF-%E8%81%8A%E5%A4%A9%E5%AE%A4%E9%80%9A%E8%AE%AF.png",alt:"聊天室通讯"}})]),E._v(" "),v("p",[E._v("客户端A，客户端B......客户端N订阅同一主题，进行消息发布和接收。实现类似聊天室效果。")])])]),E._v(" "),v("p",[E._v("以上实际上就是消息队列的两种消息模式，点对点和发布订阅模式。")]),E._v(" "),v("p",[E._v("总之，消息中间件主要有以下四大作用：")]),E._v(" "),v("ul",[v("li",[E._v("异步处理")]),E._v(" "),v("li",[E._v("应用解耦")]),E._v(" "),v("li",[E._v("流量削峰")]),E._v(" "),v("li",[E._v("日志处理")]),E._v(" "),v("li",[E._v("消息通讯")])]),E._v(" "),v("p",[v("strong",[E._v("其中，异步处理、应用解耦是比较核心的")]),E._v("，这几点也是我们使用消息中间件的主要原因。")])])}),[],!1,null,null,null);v.default=a.exports}}]);