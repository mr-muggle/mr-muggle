(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{706:function(t,a,s){"use strict";s.r(a);var v=s(74),e=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vba编程工具-vbe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vba编程工具-vbe"}},[t._v("#")]),t._v(" VBA编程工具-VBE")]),t._v(" "),a("p",[t._v("俗话说“工欲善其事，必先利其器”。也就是说，要做好一件事情，准备工作非常重要。在学习VBA之前，我们需要先了解一下VBA的编程工具-VBE。")]),t._v(" "),a("p",[t._v("既然要使用VBA编程，就需要知道应该将VBA保存在哪里。上文说过，宏就是VBA程序，那宏保存在哪里，就可以将VBA程序保存在哪里。")]),t._v(" "),a("p",[t._v("我们可以依次点击【开发工具】->【宏】命令，打开对话框。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/excel-vba/%E6%9F%A5%E7%9C%8B%E5%AE%8F.jpg",alt:"宏对话框"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"/excel-vba/%E7%BC%96%E8%BE%91%E5%AE%8F.jpg",alt:"编辑宏"}})]),t._v(" "),a("p",[t._v("点击编辑，可以打开如下窗口")]),t._v(" "),a("p",[a("img",{attrs:{src:"/excel-vba/VBE%E7%AA%97%E5%8F%A3.jpg",alt:"VBE窗口"}})]),t._v(" "),a("p",[t._v("VBE窗口全称为Visual Basic Editor，是编写VBA程序的工具，要在Excel中编写VBA程序，就得先调出这个窗口。编辑、修改、保存VBA代码，都在这个窗口中进行。")]),t._v(" "),a("h2",{attrs:{id:"打开vbe的三种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打开vbe的三种方式"}},[t._v("#")]),t._v(" 打开VBE的三种方式")]),t._v(" "),a("p",[t._v("在Excel中，我们可以使用下面任意一种方式打开VBE。")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("方法一")]),t._v("：在Excel窗口中按【Alt+F11】组合键，这是最简单的一种方式")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("方法二")]),t._v("：执行【开发工具】->【Visual Basic】命令")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/excel-vba/Visual_Basic%E5%91%BD%E4%BB%A4.jpg",alt:"Visual Basic命令"}})]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("方法三")]),t._v("：执行【开发工具】->【查看代码】命令")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/excel-vba/%E6%9F%A5%E7%9C%8B%E4%BB%A3%E7%A0%81%E5%91%BD%E4%BB%A4.jpg",alt:"查看代码命令"}})]),t._v(" "),a("h2",{attrs:{id:"vbe开发工具结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vbe开发工具结构"}},[t._v("#")]),t._v(" VBE开发工具结构")]),t._v(" "),a("p",[t._v("进入VBE后，首先看到的就是VBE的主窗口。默认情况下，在主窗口中能看到【工程资源管理器】【属性窗口】【代码窗口】【立即窗口】【菜单栏】【工具栏】。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/excel-vba/VBE%E7%AA%97%E5%8F%A3%E6%8B%86%E5%88%86%E7%AA%97%E5%8F%A3.jpg",alt:"VBE主窗口"}})]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("菜单栏")]),t._v("：VBE的【菜单栏】中包含了VBE的各种组件的命令，单击某一个菜单名称，即可调出该菜单包含的所有命令。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("工具栏")]),t._v("：默认情况下，【工具栏】位于【菜单栏】的下面，可以在【视图】->【工具栏】菜单中调出或隐藏某个工具栏。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("工程资源管理器")]),t._v("：【工程资源管理器】就是管理工程资源的地方，在其中可以看见所有打开的Excel工作簿和加载的加载宏。一个工程最多可以包含四类对象：Excel对象（包括Sheet对象和ThisWorkbook对象）、窗体对象、模块对象和类模块对象。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/excel-vba/%E5%B7%A5%E7%A8%8B%E5%8F%AF%E5%8C%85%E5%90%AB%E7%9A%84%E5%AF%B9%E8%B1%A1.jpg",alt:"工程可包含的对象"}})]),t._v(" "),a("p",[t._v("以下是各类对象的功能与作用")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("对象类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述及作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("窗体对象")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("用户自定义的对话框或操作界面")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Excel对象")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("包括工作表对象和工作簿对象")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类模块对象")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("用于创建类或对象")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("模块对象")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("用来保存VBA代码的地方")]),t._v("，录制的宏就保存在模块中，一般情况下，我们也将自行编写的程序保存在模块中")])])])]),t._v(" "),a("p",[a("strong",[t._v("注意：并不是所有工程中都包含四类对象，新建的Excel文件就只有Excel对象，其它对象都是自己插入的。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("属性窗口")]),t._v("：【属性窗口】是查看或设置对象属性的地方。例如：可以通过【属性窗口】修改控件的名称、颜色、位置等信息。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("代码窗口")]),t._v("：【代码窗口】是编辑和显示VBA代码的地方，包含【对象列表框】【事件列表框】【代码编辑区】等。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/excel-vba/%E4%BB%A3%E7%A0%81%E7%AA%97%E5%8F%A3.jpg",alt:"代码窗口"}})])])]),t._v(" "),a("p",[t._v("【工程资源管理器】中的每个对象都拥有自己的【代码窗口】，也就是说，【工程资源管理器】中的每个对象都可以保存编写的VBA代码。如果要将程序写在某个对象中，则需要在【工程资源管理器】中双击该对象，打开它的【代码窗口】。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("立即窗口")]),t._v("：【立即窗口】是一个可以即时执行代码的地方，在【立即窗口】中直接输入VBA命令，按【Enter】键后就可以看到该命令执行的结果。当然，【立即窗口】还可以用来调试代码。")])]),t._v(" "),a("h2",{attrs:{id:"使用vbe编写代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用vbe编写代码"}},[t._v("#")]),t._v(" 使用VBE编写代码")]),t._v(" "),a("p",[t._v("用VBA代码把完成一个任务所需要的操作和计算罗列起来，就得到一个VBA程序。"),a("strong",[t._v("在VBA中，将这些代码组成的程序称为过程")]),t._v("。要解决的任务不同，所编写过程包含的代码也就不同。一个VBA程序可以执行任意多的操作，可以包含任意多的代码。")]),t._v(" "),a("p",[t._v("本文档介绍Sub过程和Function过程这两种程序，录制的宏就属于Sub过程。")]),t._v(" "),a("p",[t._v("要编写Sub过程，需要遵照以下格式即可。")]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" 过程名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    逻辑代码\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("    \n")])])]),a("p",[t._v("下面，我们来编写一个Sub过程。")]),t._v(" "),a("p",[t._v("首先，在【工程资源管理器】的空白处单击鼠标右键，依次选择【插入】->【模块】命令，即可插入一个模块对象。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/excel-vba/%E7%BC%96%E5%86%99%E7%AC%AC%E4%B8%80%E4%B8%AAVBA%E7%A8%8B%E5%BA%8F.png",alt:"添加模块对象"}})]),t._v(" "),a("p",[t._v("接着，在【工程资源管理器】中双击新插入的模块，打开该模块的【代码窗口】，然后依次执行【插入】->【过程】命令，调出添加过程对话框。设置过程名称，类型选择子程序，范围选择公有的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/excel-vba/%E6%B7%BB%E5%8A%A0%E7%AC%AC%E4%B8%80%E4%B8%AA%E7%A8%8B%E5%BA%8F%E8%BF%87%E7%A8%8B.png",alt:"添加第一个程序过程"}})]),t._v(" "),a("p",[t._v("单击【确定】按钮，在【代码窗口】中插入一个只包含开始语句和结束语句的空过程。")]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" 第一个程序"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n")])])]),a("p",[t._v("然后，我们将编写VBA的逻辑代码。")]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" 第一个程序"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    MsgBox "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"这是我的第一个VBA程序"')]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n")])])]),a("p",[t._v("最后，Sub过程编写好了，只要将鼠标光标定位到程序的任意位置，依次执行【运行】->【运行子过程/用户窗体】命令（或按【F5】键）即可执行它。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/excel-vba/%E8%BF%90%E8%A1%8C%E7%A8%8B%E5%BA%8F%E5%AF%B9%E8%AF%9D%E6%A1%86.png",alt:"运行程序对话框"}})]),t._v(" "),a("p",[t._v("选中这个程序，点击【确认】按钮，运行结果为弹出一个对话框。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/excel-vba/%E7%AC%AC%E4%B8%80%E4%B8%AA%E7%A8%8B%E5%BA%8F%E8%BF%90%E8%A1%8C%E7%BB%93%E6%9E%9C.png",alt:"第一个程序运行结果"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);