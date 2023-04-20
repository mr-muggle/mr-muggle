(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{729:function(v,_,t){"use strict";t.r(_);var a=t(74),r=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"行为型模式概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#行为型模式概念"}},[v._v("#")]),v._v(" 行为型模式概念")]),v._v(" "),_("p",[v._v("行为型模式用于描述程序在运行时复杂的流程控制，即描述多个类或对象之间怎样相互协作共同完成单个对象都无法单独完成的任务，它涉及算法与对象间职责的分配。")]),v._v(" "),_("p",[v._v("行为型模式分为类行为模式和对象行为模式，前者采用继承机制来在类间分派行为，后者采用组合或聚合在对象间分配行为。由于组合关系或聚合关系比继承关系耦合度低，满足“合成复用原则”，所以对象行为模式比类行为模式具有更大的灵活性。")]),v._v(" "),_("h2",{attrs:{id:"行为型模式的分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#行为型模式的分类"}},[v._v("#")]),v._v(" 行为型模式的分类")]),v._v(" "),_("p",[v._v("行为型模式包含以下 11 种模式。")]),v._v(" "),_("ol",[_("li",[v._v("模板方法（Template Method）模式：定义一个操作中的算法骨架，将算法的一些步骤延迟到子类中，使得子类在可以不改变该算法结构的情况下重定义该算法的某些特定步骤。")]),v._v(" "),_("li",[v._v("策略（Strategy）模式：定义了一系列算法，并将每个算法封装起来，使它们可以相互替换，且算法的改变不会影响使用算法的客户。")]),v._v(" "),_("li",[v._v("命令（Command）模式：将一个请求封装为一个对象，使发出请求的责任和执行请求的责任分割开。")]),v._v(" "),_("li",[v._v("职责链（Chain of Responsibility）模式：把请求从链中的一个对象传到下一个对象，直到请求被响应为止。通过这种方式去除对象之间的耦合。")]),v._v(" "),_("li",[v._v("状态（State）模式：允许一个对象在其内部状态发生改变时改变其行为能力。")]),v._v(" "),_("li",[v._v("观察者（Observer）模式：多个对象间存在一对多关系，当一个对象发生改变时，把这种改变通知给其他多个对象，从而影响其他对象的行为。")]),v._v(" "),_("li",[v._v("中介者（Mediator）模式：定义一个中介对象来简化原有对象之间的交互关系，降低系统中对象间的耦合度，使原有对象之间不必相互了解。")]),v._v(" "),_("li",[v._v("迭代器（Iterator）模式：提供一种方法来顺序访问聚合对象中的一系列数据，而不暴露聚合对象的内部表示。")]),v._v(" "),_("li",[v._v("访问者（Visitor）模式：在不改变集合元素的前提下，为一个集合中的每个元素提供多种访问方式，即每个元素有多个访问者对象访问。")]),v._v(" "),_("li",[v._v("备忘录（Memento）模式：在不破坏封装性的前提下，获取并保存一个对象的内部状态，以便以后恢复它。")]),v._v(" "),_("li",[v._v("解释器（Interpreter）模式：提供如何定义语言的文法，以及对语言句子的解释方法，即解释器。")])]),v._v(" "),_("h2",{attrs:{id:"模板方法模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模板方法模式"}},[v._v("#")]),v._v(" 模板方法模式")]),v._v(" "),_("h3",{attrs:{id:"模板模式的定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模板模式的定义"}},[v._v("#")]),v._v(" 模板模式的定义")]),v._v(" "),_("p",[v._v("模板方法（Template Method）模式的定义如下：定义一个操作中的算法骨架，而将算法的一些步骤延迟到子类中，使得子类可以不改变该算法结构的情况下重定义该算法的某些特定步骤。它是一种类行为型模式。")]),v._v(" "),_("h3",{attrs:{id:"模式的优缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式的优缺点"}},[v._v("#")]),v._v(" 模式的优缺点")]),v._v(" "),_("p",[v._v("该模式的主要优点如下：")]),v._v(" "),_("ol",[_("li",[v._v("它封装了不变部分，扩展可变部分。它把认为是不变部分的算法封装到父类中实现，而把可变部分算法由子类继承实现，便于子类继续扩展。")]),v._v(" "),_("li",[v._v("它在父类中提取了公共的部分代码，便于代码复用。")]),v._v(" "),_("li",[v._v("部分方法是由子类实现的，因此子类可以通过扩展方式增加相应的功能，符合开闭原则。")])]),v._v(" "),_("p",[v._v("该模式的主要缺点如下：")]),v._v(" "),_("ol",[_("li",[v._v("对每个不同的实现都需要定义一个子类，这会导致类的个数增加，系统更加庞大，设计也更加抽象，间接地增加了系统实现的复杂度。")]),v._v(" "),_("li",[v._v("父类中的抽象方法由子类实现，子类执行的结果会影响父类的结果，这导致一种反向的控制结构，它提高了代码阅读的难度。")]),v._v(" "),_("li",[v._v("由于继承关系自身的缺点，如果父类添加新的抽象方法，则所有子类都要修改。")])]),v._v(" "),_("h3",{attrs:{id:"模板模式的结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模板模式的结构"}},[v._v("#")]),v._v(" 模板模式的结构")]),v._v(" "),_("p",[v._v("模板方法模式包含以下主要角色。")]),v._v(" "),_("ol",[_("li",[v._v("抽象类/抽象模板（Abstract Class）")])]),v._v(" "),_("p",[v._v("抽象模板类，负责给出一个算法的轮廓和骨架。它由一个模板方法和若干个基本方法构成。这些方法的定义如下。")]),v._v(" "),_("p",[v._v("① 模板方法：定义了算法的骨架，按某种顺序调用其包含的基本方法。")]),v._v(" "),_("p",[v._v("② 基本方法：是整个算法中的一个步骤，包含以下几种类型。")]),v._v(" "),_("ul",[_("li",[v._v("抽象方法：在抽象类中声明，由具体子类实现。")]),v._v(" "),_("li",[v._v("具体方法：在抽象类中已经实现，在具体子类中可以继承或重写它。")]),v._v(" "),_("li",[v._v("钩子方法：在抽象类中已经实现，包括用于判断的逻辑方法和需要子类重写的空方法两种。")])]),v._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[v._v("具体子类/具体实现（Concrete Class）")])]),v._v(" "),_("p",[v._v("具体实现类，实现抽象类中所定义的抽象方法和钩子方法，它们是一个顶级逻辑的一个组成步骤。")]),v._v(" "),_("h3",{attrs:{id:"模板方法的使用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模板方法的使用场景"}},[v._v("#")]),v._v(" 模板方法的使用场景")]),v._v(" "),_("p",[v._v("模板方法模式通常适用于以下场景。")]),v._v(" "),_("ol",[_("li",[v._v("算法的整体步骤很固定，但其中个别部分易变时，这时候可以使用模板方法模式，将容易变的部分抽象出来，供子类实现。")]),v._v(" "),_("li",[v._v("当多个子类存在公共的行为时，可以将其提取出来并集中到一个公共父类中以避免代码重复。首先，要识别现有代码中的不同之处，并且将不同之处分离为新的操作。最后，用一个调用这些新的操作的模板方法来替换这些不同的代码。")]),v._v(" "),_("li",[v._v("当需要控制子类的扩展时，模板方法只在特定点调用钩子操作，这样就只允许在这些点进行扩展。")])]),v._v(" "),_("h2",{attrs:{id:"策略模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#策略模式"}},[v._v("#")]),v._v(" 策略模式")]),v._v(" "),_("h3",{attrs:{id:"策略模式的定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#策略模式的定义"}},[v._v("#")]),v._v(" 策略模式的定义")]),v._v(" "),_("p",[v._v("策略（Strategy）模式的定义：该模式定义了一系列算法，并将每个算法封装起来，使它们可以相互替换，且算法的变化不会影响使用算法的客户。策略模式属于对象行为模式，它通过对算法进行封装，把使用算法的责任和算法的实现分割开来，并委派给不同的对象对这些算法进行管理。")]),v._v(" "),_("h3",{attrs:{id:"策略模式的优缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#策略模式的优缺点"}},[v._v("#")]),v._v(" 策略模式的优缺点")]),v._v(" "),_("p",[v._v("策略模式的主要优点如下。")]),v._v(" "),_("ol",[_("li",[v._v("多重条件语句不易维护，而使用策略模式可以避免使用多重条件语句，如 if...else 语句、switch...case 语句。")]),v._v(" "),_("li",[v._v("策略模式提供了一系列的可供重用的算法族，恰当使用继承可以把算法族的公共代码转移到父类里面，从而避免重复的代码。")]),v._v(" "),_("li",[v._v("策略模式可以提供相同行为的不同实现，客户可以根据不同时间或空间要求选择不同的。")]),v._v(" "),_("li",[v._v("策略模式提供了对开闭原则的完美支持，可以在不修改原代码的情况下，灵活增加新算法。")]),v._v(" "),_("li",[v._v("策略模式把算法的使用放到环境类中，而算法的实现移到具体策略类中，实现了二者的分离。")])]),v._v(" "),_("p",[v._v("其主要缺点如下。")]),v._v(" "),_("ol",[_("li",[v._v("客户端必须理解所有策略算法的区别，以便适时选择恰当的算法类。")]),v._v(" "),_("li",[v._v("策略模式造成很多的策略类，增加维护难度。")])]),v._v(" "),_("h3",{attrs:{id:"策略模式的结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#策略模式的结构"}},[v._v("#")]),v._v(" 策略模式的结构")]),v._v(" "),_("p",[v._v("策略模式是准备一组算法，并将这组算法封装到一系列的策略类里面，作为一个抽象策略类的子类。策略模式的重心不是如何实现算法，而是如何组织这些算法，从而让程序结构更加灵活，具有更好的维护性和扩展性，现在我们来分析其基本结构和实现方法。")]),v._v(" "),_("p",[v._v("策略模式的主要角色如下。")]),v._v(" "),_("ol",[_("li",[v._v("抽象策略（Strategy）类：定义了一个公共接口，各种不同的算法以不同的方式实现这个接口，环境角色使用这个接口调用不同的算法，一般使用接口或抽象类实现。")]),v._v(" "),_("li",[v._v("具体策略（Concrete Strategy）类：实现了抽象策略定义的接口，提供具体的算法实现。")]),v._v(" "),_("li",[v._v("环境（Context）类：持有一个策略类的引用，最终给客户端调用。")])]),v._v(" "),_("h3",{attrs:{id:"策略模式的应用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#策略模式的应用场景"}},[v._v("#")]),v._v(" 策略模式的应用场景")]),v._v(" "),_("p",[v._v("在程序设计中，通常在以下几种情况中使用策略模式较多")]),v._v(" "),_("ol",[_("li",[v._v("一个系统需要动态地在几种算法中选择一种时，可将每个算法封装到策略类中。")]),v._v(" "),_("li",[v._v("一个类定义了多种行为，并且这些行为在这个类的操作中以多个条件语句的形式出现，可将每个条件分支移入它们各自的策略类中以代替这些条件语句。")]),v._v(" "),_("li",[v._v("系统中各算法彼此完全独立，且要求对客户隐藏具体算法的实现细节时。")]),v._v(" "),_("li",[v._v("系统要求使用算法的客户不应该知道其操作的数据时，可使用策略模式来隐藏与算法相关的数据结构。")]),v._v(" "),_("li",[v._v("多个类只区别在表现行为不同，可以使用策略模式，在运行时动态选择具体要执行的行为。")])]),v._v(" "),_("h2",{attrs:{id:"命令模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令模式"}},[v._v("#")]),v._v(" 命令模式")]),v._v(" "),_("h3",{attrs:{id:"命令模式的定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令模式的定义"}},[v._v("#")]),v._v(" 命令模式的定义")]),v._v(" "),_("p",[v._v("命令（Command）模式的定义如下：将一个请求封装为一个对象，使发出请求的责任和执行请求的责任分割开。这样两者之间通过命令对象进行沟通，这样方便将命令对象进行储存、传递、调用、增加与管理。")]),v._v(" "),_("h3",{attrs:{id:"命令模式的优缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令模式的优缺点"}},[v._v("#")]),v._v(" 命令模式的优缺点")]),v._v(" "),_("p",[v._v("命令模式的主要优点如下。")]),v._v(" "),_("ol",[_("li",[v._v("通过引入中间件（抽象接口）降低系统的耦合度。")]),v._v(" "),_("li",[v._v("扩展性良好，增加或删除命令非常方便。采用命令模式增加与删除命令不会影响其他类，且满足“开闭原则”。")]),v._v(" "),_("li",[v._v("可以实现宏命令。命令模式可以与"),_("a",{attrs:{href:"http://c.biancheng.net/view/1373.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("组合模式"),_("OutboundLink")],1),v._v("结合，将多个命令装配成一个组合命令，即宏命令。")]),v._v(" "),_("li",[v._v("方便实现 Undo 和 Redo 操作。命令模式可以与后面介绍的备忘录模式结合，实现命令的撤销与恢复。")]),v._v(" "),_("li",[v._v("可以在现有命令的基础上，增加额外功能。比如日志记录，结合装饰器模式会更加灵活。")])]),v._v(" "),_("p",[v._v("其缺点是：")]),v._v(" "),_("ol",[_("li",[v._v("可能产生大量具体的命令类。因为每一个具体操作都需要设计一个具体命令类，这会增加系统的复杂性。")]),v._v(" "),_("li",[v._v("命令模式的结果其实就是接收方的执行结果，但是为了以命令的形式进行架构、解耦请求与实现，引入了额外类型结构（引入了请求方与抽象命令接口），增加了理解上的困难。不过这也是设计模式的通病，抽象必然会额外增加类的数量，代码抽离肯定比代码聚合更加难理解。")])]),v._v(" "),_("h3",{attrs:{id:"命令模式的结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令模式的结构"}},[v._v("#")]),v._v(" 命令模式的结构")]),v._v(" "),_("p",[v._v("命令模式包含以下主要角色。")]),v._v(" "),_("ol",[_("li",[v._v("抽象命令类（Command）角色：声明执行命令的接口，拥有执行命令的抽象方法 execute()。")]),v._v(" "),_("li",[v._v("具体命令类（Concrete Command）角色：是抽象命令类的具体实现类，它拥有接收者对象，并通过调用接收者的功能来完成命令要执行的操作。")]),v._v(" "),_("li",[v._v("实现者/接收者（Receiver）角色：执行命令功能的相关操作，是具体命令对象业务的真正实现者。")]),v._v(" "),_("li",[v._v("调用者/请求者（Invoker）角色：是请求的发送者，它通常拥有很多的命令对象，并通过访问命令对象来执行相关请求，它不直接访问接收者。")])]),v._v(" "),_("h3",{attrs:{id:"命令模式的使用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令模式的使用场景"}},[v._v("#")]),v._v(" 命令模式的使用场景")]),v._v(" "),_("p",[v._v("命令模式通常适用于以下场景：")]),v._v(" "),_("ol",[_("li",[v._v("请求调用者需要与请求接收者解耦时，命令模式可以使调用者和接收者不直接交互。")]),v._v(" "),_("li",[v._v("系统随机请求命令或经常增加、删除命令时，命令模式可以方便地实现这些功能。")]),v._v(" "),_("li",[v._v("当系统需要执行一组操作时，命令模式可以定义宏命令来实现该功能。")]),v._v(" "),_("li",[v._v("当系统需要支持命令的撤销（Undo）操作和恢复（Redo）操作时，可以将命令对象存储起来，采用备忘录模式来实现。")])]),v._v(" "),_("h2",{attrs:{id:"责任链模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#责任链模式"}},[v._v("#")]),v._v(" 责任链模式")]),v._v(" "),_("h3",{attrs:{id:"责任链模式的定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#责任链模式的定义"}},[v._v("#")]),v._v(" 责任链模式的定义")]),v._v(" "),_("p",[v._v("责任链（Chain of Responsibility）模式的定义：为了避免请求发送者与多个请求处理者耦合在一起，于是将所有请求的处理者通过前一对象记住其下一个对象的引用而连成一条链；当有请求发生时，可将请求沿着这条链传递，直到有对象处理它为止。")]),v._v(" "),_("p",[v._v("在责任链模式中，客户只需要将请求发送到责任链上即可，无须关心请求的处理细节和请求的传递过程，请求会自动进行传递。所以责任链将请求的发送者和请求的处理者解耦了。")]),v._v(" "),_("h3",{attrs:{id:"责任链模式的优缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#责任链模式的优缺点"}},[v._v("#")]),v._v(" 责任链模式的优缺点")]),v._v(" "),_("p",[v._v("责任链模式是一种对象行为型模式，其主要优点如下。")]),v._v(" "),_("ol",[_("li",[v._v("降低了对象之间的耦合度。该模式使得一个对象无须知道到底是哪一个对象处理其请求以及链的结构，发送者和接收者也无须拥有对方的明确信息。")]),v._v(" "),_("li",[v._v("增强了系统的可扩展性。可以根据需要增加新的请求处理类，满足开闭原则。")]),v._v(" "),_("li",[v._v("增强了给对象指派职责的灵活性。当工作流程发生变化，可以动态地改变链内的成员或者调动它们的次序，也可动态地新增或者删除责任。")]),v._v(" "),_("li",[v._v("责任链简化了对象之间的连接。每个对象只需保持一个指向其后继者的引用，不需保持其他所有处理者的引用，这避免了使用众多的 if 或者 if···else 语句。")]),v._v(" "),_("li",[v._v("责任分担。每个类只需要处理自己该处理的工作，不该处理的传递给下一个对象完成，明确各类的责任范围，符合类的单一职责原则。")])]),v._v(" "),_("p",[v._v("其主要缺点如下。")]),v._v(" "),_("ol",[_("li",[v._v("不能保证每个请求一定被处理。由于一个请求没有明确的接收者，所以不能保证它一定会被处理，该请求可能一直传到链的末端都得不到处理。")]),v._v(" "),_("li",[v._v("对比较长的职责链，请求的处理可能涉及多个处理对象，系统性能将受到一定影响。")]),v._v(" "),_("li",[v._v("职责链建立的合理性要靠客户端来保证，增加了客户端的复杂性，可能会由于职责链的错误设置而导致系统出错，如可能会造成循环调用。")])]),v._v(" "),_("h3",{attrs:{id:"责任链模式的结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#责任链模式的结构"}},[v._v("#")]),v._v(" 责任链模式的结构")]),v._v(" "),_("p",[v._v("职责链模式主要包含以下角色。")]),v._v(" "),_("ol",[_("li",[v._v("抽象处理者（Handler）角色：定义一个处理请求的接口，包含抽象处理方法和一个后继连接。")]),v._v(" "),_("li",[v._v("具体处理者（Concrete Handler）角色：实现抽象处理者的处理方法，判断能否处理本次请求，如果可以处理请求则处理，否则将该请求转给它的后继者。")]),v._v(" "),_("li",[v._v("客户类（Client）角色：创建处理链，并向链头的具体处理者对象提交请求，它不关心处理细节和请求的传递过程。")])]),v._v(" "),_("p",[v._v("责任链模式的本质是解耦请求与处理，让请求在处理链中能进行传递与被处理；理解责任链模式应当理解其模式，而不是其具体实现。责任链模式的独到之处是将其节点处理者组合成了链式结构，并允许节点自身决定是否进行请求处理或转发，相当于让请求流动起来。")]),v._v(" "),_("h3",{attrs:{id:"责任链模式的使用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#责任链模式的使用场景"}},[v._v("#")]),v._v(" 责任链模式的使用场景")]),v._v(" "),_("p",[v._v("责任链模式通常在以下几种情况使用。")]),v._v(" "),_("ol",[_("li",[v._v("多个对象可以处理一个请求，但具体由哪个对象处理该请求在运行时自动确定。")]),v._v(" "),_("li",[v._v("可动态指定一组对象处理请求，或添加新的处理者。")]),v._v(" "),_("li",[v._v("需要在不明确指定请求处理者的情况下，向多个处理者中的一个提交请求。")])]),v._v(" "),_("h2",{attrs:{id:"状态模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#状态模式"}},[v._v("#")]),v._v(" 状态模式")]),v._v(" "),_("h3",{attrs:{id:"状态模式的定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#状态模式的定义"}},[v._v("#")]),v._v(" 状态模式的定义")]),v._v(" "),_("p",[v._v("状态（State）模式的定义：对有状态的对象，把复杂的“判断逻辑”提取到不同的状态对象中，允许状态对象在其内部状态发生改变时改变其行为。")]),v._v(" "),_("h3",{attrs:{id:"状态模式的优缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#状态模式的优缺点"}},[v._v("#")]),v._v(" 状态模式的优缺点")]),v._v(" "),_("p",[v._v("状态模式是一种对象行为型模式，其主要优点如下。")]),v._v(" "),_("ol",[_("li",[v._v("结构清晰，状态模式将与特定状态相关的行为局部化到一个状态中，并且将不同状态的行为分割开来，满足“单一职责原则”。")]),v._v(" "),_("li",[v._v("将状态转换显示化，减少对象间的相互依赖。将不同的状态引入独立的对象中会使得状态转换变得更加明确，且减少对象间的相互依赖。")]),v._v(" "),_("li",[v._v("状态类职责明确，有利于程序的扩展。通过定义新的子类很容易地增加新的状态和转换。")])]),v._v(" "),_("p",[v._v("状态模式的主要缺点如下。")]),v._v(" "),_("ol",[_("li",[v._v("状态模式的使用必然会增加系统的类与对象的个数。")]),v._v(" "),_("li",[v._v("状态模式的结构与实现都较为复杂，如果使用不当会导致程序结构和代码的混乱。")]),v._v(" "),_("li",[v._v("状态模式对开闭原则的支持并不太好，对于可以切换状态的状态模式，增加新的状态类需要修改那些负责状态转换的源码，否则无法切换到新增状态，而且修改某个状态类的行为也需要修改对应类的源码。")])]),v._v(" "),_("h3",{attrs:{id:"状态对象模式的结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#状态对象模式的结构"}},[v._v("#")]),v._v(" 状态对象模式的结构")]),v._v(" "),_("p",[v._v("状态模式把受环境改变的对象行为包装在不同的状态对象里，其意图是让一个对象在其内部状态改变的时候，其行为也随之改变。现在我们来分析其基本结构和实现方法。")]),v._v(" "),_("p",[v._v("状态模式包含以下主要角色：")]),v._v(" "),_("ol",[_("li",[v._v("环境类（Context）角色：也称为上下文，它定义了客户端需要的接口，内部维护一个当前状态，并负责具体状态的切换。")]),v._v(" "),_("li",[v._v("抽象状态（State）角色：定义一个接口，用以封装环境对象中的特定状态所对应的行为，可以有一个或多个行为。")]),v._v(" "),_("li",[v._v("具体状态（Concrete State）角色：实现抽象状态所对应的行为，并且在需要的情况下进行状态切换。")])]),v._v(" "),_("p",[v._v("状态模式把受环境改变的对象行为包装在不同的状态对象里，其意图是让一个对象在其内部状态改变的时候，其行为也随之改变。现在我们来分析其基本结构和实现方法。")]),v._v(" "),_("h3",{attrs:{id:"状态模式的使用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#状态模式的使用场景"}},[v._v("#")]),v._v(" 状态模式的使用场景")]),v._v(" "),_("p",[v._v("通常在以下情况下可以考虑使用状态模式。")]),v._v(" "),_("ul",[_("li",[v._v("当一个对象的行为取决于它的状态，并且它必须在运行时根据状态改变它的行为时，就可以考虑使用状态模式。")]),v._v(" "),_("li",[v._v("一个操作中含有庞大的分支结构，并且这些分支决定于对象的状态时")])]),v._v(" "),_("h3",{attrs:{id:"状态模式、责任链模式、策略模式之间的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#状态模式、责任链模式、策略模式之间的区别"}},[v._v("#")]),v._v(" 状态模式、责任链模式、策略模式之间的区别")]),v._v(" "),_("h4",{attrs:{id:"状态模式与责任链模式的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#状态模式与责任链模式的区别"}},[v._v("#")]),v._v(" 状态模式与责任链模式的区别")]),v._v(" "),_("p",[v._v("状态模式和责任链模式都能消除 if-else 分支过多的问题。但在某些情况下，状态模式中的状态可以理解为责任，那么在这种情况下，两种模式都可以使用。")]),v._v(" "),_("p",[v._v("从定义来看，状态模式强调的是一个对象内在状态的改变，而责任链模式强调的是外部节点对象间的改变。")]),v._v(" "),_("p",[v._v("从代码实现上来看，两者最大的区别就是状态模式的各个状态对象知道自己要进入的下一个状态对象，而责任链模式并不清楚其下一个节点处理对象，因为链式组装由客户端负责。")]),v._v(" "),_("h4",{attrs:{id:"状态模式与策略模式的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#状态模式与策略模式的区别"}},[v._v("#")]),v._v(" 状态模式与策略模式的区别")]),v._v(" "),_("p",[v._v("状态模式和策略模式的 UML 类图架构几乎完全一样，但两者的应用场景是不一样的。策略模式的多种算法行为择其一都能满足，彼此之间是独立的，用户可自行更换策略算法，而状态模式的各个状态间存在相互关系，彼此之间在一定条件下存在自动切换状态的效果，并且用户无法指定状态，只能设置初始状态。")]),v._v(" "),_("h2",{attrs:{id:"观察者模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式"}},[v._v("#")]),v._v(" 观察者模式")]),v._v(" "),_("h3",{attrs:{id:"观察者模式的定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式的定义"}},[v._v("#")]),v._v(" 观察者模式的定义")]),v._v(" "),_("p",[v._v("观察者（Observer）模式的定义：指多个对象间存在一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。这种模式有时又称作发布-订阅模式、模型-视图模式，它是对象行为型模式。")]),v._v(" "),_("h3",{attrs:{id:"观察者模式的优缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式的优缺点"}},[v._v("#")]),v._v(" 观察者模式的优缺点")]),v._v(" "),_("p",[v._v("观察者模式是一种对象行为型模式，其主要优点如下。")]),v._v(" "),_("ol",[_("li",[v._v("降低了目标与观察者之间的耦合关系，两者之间是抽象耦合关系。符合依赖倒置原则。")]),v._v(" "),_("li",[v._v("目标与观察者之间建立了一套触发机制。")])]),v._v(" "),_("p",[v._v("它的主要缺点如下。")]),v._v(" "),_("ol",[_("li",[v._v("目标与观察者之间的依赖关系并没有完全解除，而且有可能出现循环引用。")]),v._v(" "),_("li",[v._v("当观察者对象很多时，通知的发布会花费很多时间，影响程序的效率。")])]),v._v(" "),_("h3",{attrs:{id:"观察者模式的结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式的结构"}},[v._v("#")]),v._v(" 观察者模式的结构")]),v._v(" "),_("p",[v._v("实现观察者模式时要注意具体目标对象和具体观察者对象之间不能直接调用，否则将使两者之间紧密耦合起来，这违反了面向对象的设计原则。")]),v._v(" "),_("p",[v._v("观察者模式的主要角色如下。")]),v._v(" "),_("ol",[_("li",[v._v("抽象主题（Subject）角色：也叫抽象目标类，它提供了一个用于保存观察者对象的聚集类和增加、删除观察者对象的方法，以及通知所有观察者的抽象方法。")]),v._v(" "),_("li",[v._v("具体主题（Concrete Subject）角色：也叫具体目标类，它实现抽象目标中的通知方法，当具体主题的内部状态发生改变时，通知所有注册过的观察者对象。")]),v._v(" "),_("li",[v._v("抽象观察者（Observer）角色：它是一个抽象类或接口，它包含了一个更新自己的抽象方法，当接到具体主题的更改通知时被调用。")]),v._v(" "),_("li",[v._v("具体观察者（Concrete Observer）角色：实现抽象观察者中定义的抽象方法，以便在得到目标的更改通知时更新自身的状态。")])]),v._v(" "),_("h3",{attrs:{id:"观察者模式的使用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式的使用场景"}},[v._v("#")]),v._v(" 观察者模式的使用场景")]),v._v(" "),_("p",[v._v("在软件系统中，当系统一方行为依赖另一方行为的变动时，可使用观察者模式松耦合联动双方，使得一方的变动可以通知到感兴趣的另一方对象，从而让另一方对象对此做出响应。")]),v._v(" "),_("p",[v._v("通过前面的分析与应用实例可知观察者模式适合以下几种情形。")]),v._v(" "),_("ol",[_("li",[v._v("对象间存在一对多关系，一个对象的状态发生改变会影响其他对象。")]),v._v(" "),_("li",[v._v("当一个抽象模型有两个方面，其中一个方面依赖于另一方面时，可将这二者封装在独立的对象中以使它们可以各自独立地改变和复用。")]),v._v(" "),_("li",[v._v("实现类似广播机制的功能，不需要知道具体收听者，只需分发广播，系统中感兴趣的对象会自动接收该广播。")]),v._v(" "),_("li",[v._v("多层级嵌套使用，形成一种链式触发机制，使得事件具备跨域（跨越两种观察者类型）通知。")])]),v._v(" "),_("h2",{attrs:{id:"中介者模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#中介者模式"}},[v._v("#")]),v._v(" 中介者模式")]),v._v(" "),_("h3",{attrs:{id:"中介者模式的定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#中介者模式的定义"}},[v._v("#")]),v._v(" 中介者模式的定义")]),v._v(" "),_("p",[v._v("中介者（Mediator）模式的定义：定义一个中介对象来封装一系列对象之间的交互，使原有对象之间的耦合松散，且可以独立地改变它们之间的交互。中介者模式又叫调停模式，它是迪米特法则的典型应用。")]),v._v(" "),_("h3",{attrs:{id:"中介者模式的优缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#中介者模式的优缺点"}},[v._v("#")]),v._v(" 中介者模式的优缺点")]),v._v(" "),_("p",[v._v("中介者（Mediator）模式的定义：定义一个中介对象来封装一系列对象之间的交互，使原有对象之间的耦合松散，且可以独立地改变它们之间的交互。中介者模式又叫调停模式，它是迪米特法则的典型应用。")]),v._v(" "),_("p",[v._v("中介者模式是一种对象行为型模式，其主要优点如下。")]),v._v(" "),_("ol",[_("li",[v._v("类之间各司其职，符合迪米特法则。")]),v._v(" "),_("li",[v._v("降低了对象之间的耦合性，使得对象易于独立地被复用。")]),v._v(" "),_("li",[v._v("将对象间的一对多关联转变为一对一的关联，提高系统的灵活性，使得系统易于维护和扩展。")])]),v._v(" "),_("p",[v._v("其主要缺点是：中介者模式将原本多个对象直接的相互依赖变成了中介者和多个同事类的依赖关系。当同事类越多时，中介者就会越臃肿，变得复杂且难以维护。")]),v._v(" "),_("h3",{attrs:{id:"中介者模式的结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#中介者模式的结构"}},[v._v("#")]),v._v(" 中介者模式的结构")]),v._v(" "),_("p",[v._v("中介者模式实现的关键是找出“中介者”，下面对它的结构和实现进行分析。")]),v._v(" "),_("p",[v._v("中介者模式包含以下主要角色。")]),v._v(" "),_("ol",[_("li",[v._v("抽象中介者（Mediator）角色：它是中介者的接口，提供了同事对象注册与转发同事对象信息的抽象方法。")]),v._v(" "),_("li",[v._v("具体中介者（Concrete Mediator）角色：实现中介者接口，定义一个 List 来管理同事对象，协调各个同事角色之间的交互关系，因此它依赖于同事角色。")]),v._v(" "),_("li",[v._v("抽象同事类（Colleague）角色：定义同事类的接口，保存中介者对象，提供同事对象交互的抽象方法，实现所有相互影响的同事类的公共功能。")]),v._v(" "),_("li",[v._v("具体同事类（Concrete Colleague）角色：是抽象同事类的实现者，当需要与其他同事对象交互时，由中介者对象负责后续的交互。")])]),v._v(" "),_("h2",{attrs:{id:"迭代器模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#迭代器模式"}},[v._v("#")]),v._v(" 迭代器模式")]),v._v(" "),_("h3",{attrs:{id:"迭代器模式的定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#迭代器模式的定义"}},[v._v("#")]),v._v(" 迭代器模式的定义")]),v._v(" "),_("p",[v._v("迭代器（Iterator）模式的定义：提供一个对象来顺序访问聚合对象中的一系列数据，而不暴露聚合对象的内部表示。迭代器模式是一种对象行为型模式")]),v._v(" "),_("h3",{attrs:{id:"迭代器模式的优缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#迭代器模式的优缺点"}},[v._v("#")]),v._v(" 迭代器模式的优缺点")]),v._v(" "),_("p",[v._v("主要优点如下。")]),v._v(" "),_("ol",[_("li",[v._v("访问一个聚合对象的内容而无须暴露它的内部表示。")]),v._v(" "),_("li",[v._v("遍历任务交由迭代器完成，这简化了聚合类。")]),v._v(" "),_("li",[v._v("它支持以不同方式遍历一个聚合，甚至可以自定义迭代器的子类以支持新的遍历。")]),v._v(" "),_("li",[v._v("增加新的聚合类和迭代器类都很方便，无须修改原有代码。")]),v._v(" "),_("li",[v._v("封装性良好，为遍历不同的聚合结构提供一个统一的接口。")])]),v._v(" "),_("p",[v._v("其主要缺点是：增加了类的个数，这在一定程度上增加了系统的复杂性。")]),v._v(" "),_("h3",{attrs:{id:"迭代器模式的结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#迭代器模式的结构"}},[v._v("#")]),v._v(" 迭代器模式的结构")]),v._v(" "),_("p",[v._v("迭代器模式是通过将聚合对象的遍历行为分离出来，抽象成迭代器类来实现的，其目的是在不暴露聚合对象的内部结构的情况下，让外部代码透明地访问聚合的内部数据。现在我们来分析其基本结构与实现方法。")]),v._v(" "),_("p",[v._v("迭代器模式主要包含以下角色：")]),v._v(" "),_("ol",[_("li",[v._v("抽象聚合（Aggregate）角色：定义存储、添加、删除聚合对象以及创建迭代器对象的接口。")]),v._v(" "),_("li",[v._v("具体聚合（ConcreteAggregate）角色：实现抽象聚合类，返回一个具体迭代器的实例。")]),v._v(" "),_("li",[v._v("抽象迭代器（Iterator）角色：定义访问和遍历聚合元素的接口，通常包含 hasNext()、first()、next() 等方法。")]),v._v(" "),_("li",[v._v("具体迭代器（Concretelterator）角色：实现抽象迭代器接口中所定义的方法，完成对聚合对象的遍历，记录遍历的当前位置。")])]),v._v(" "),_("h3",{attrs:{id:"迭代器模式的使用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#迭代器模式的使用场景"}},[v._v("#")]),v._v(" 迭代器模式的使用场景")]),v._v(" "),_("ol",[_("li",[v._v("当需要为聚合对象提供多种遍历方式时。")]),v._v(" "),_("li",[v._v("当需要为遍历不同的聚合结构提供一个统一的接口时。")]),v._v(" "),_("li",[v._v("当访问一个聚合对象的内容而无须暴露其内部细节的表示时。")])]),v._v(" "),_("p",[v._v("由于聚合与迭代器的关系非常密切，所以大多数语言在实现聚合类时都提供了迭代器类，因此大数情况下使用语言中已有的聚合类的迭代器就已经够了。")]),v._v(" "),_("h2",{attrs:{id:"访问者模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#访问者模式"}},[v._v("#")]),v._v(" 访问者模式")]),v._v(" "),_("h3",{attrs:{id:"访问者模式的定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#访问者模式的定义"}},[v._v("#")]),v._v(" 访问者模式的定义")]),v._v(" "),_("p",[v._v("访问者（Visitor）模式的定义：将作用于某种数据结构中的各元素的操作分离出来封装成独立的类，使其在不改变数据结构的前提下可以添加作用于这些元素的新的操作，为数据结构中的每个元素提供多种访问方式。它将对数据的操作与数据结构进行分离，是行为类模式中最复杂的一种模式。")]),v._v(" "),_("h3",{attrs:{id:"访问者模式的优缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#访问者模式的优缺点"}},[v._v("#")]),v._v(" 访问者模式的优缺点")]),v._v(" "),_("p",[v._v("访问者（Visitor）模式是一种对象行为型模式，其主要优点如下。")]),v._v(" "),_("ol",[_("li",[v._v("扩展性好。能够在不修改对象结构中的元素的情况下，为对象结构中的元素添加新的功能。")]),v._v(" "),_("li",[v._v("复用性好。可以通过访问者来定义整个对象结构通用的功能，从而提高系统的复用程度。")]),v._v(" "),_("li",[v._v("灵活性好。访问者模式将数据结构与作用于结构上的操作解耦，使得操作集合可相对自由地演化而不影响系统的数据结构。")]),v._v(" "),_("li",[v._v("符合单一职责原则。访问者模式把相关的行为封装在一起，构成一个访问者，使每一个访问者的功能都比较单一。")])]),v._v(" "),_("p",[v._v("访问者（Visitor）模式的主要缺点如下。")]),v._v(" "),_("ol",[_("li",[v._v("增加新的元素类很困难。在访问者模式中，每增加一个新的元素类，都要在每一个具体访问者类中增加相应的具体操作，这违背了“开闭原则”。")]),v._v(" "),_("li",[v._v("破坏封装。访问者模式中具体元素对访问者公布细节，这破坏了对象的封装性。")]),v._v(" "),_("li",[v._v("违反了依赖倒置原则。访问者模式依赖了具体类，而没有依赖抽象类。")])]),v._v(" "),_("h3",{attrs:{id:"访问者模式的结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#访问者模式的结构"}},[v._v("#")]),v._v(" 访问者模式的结构")]),v._v(" "),_("p",[v._v("访问者（Visitor）模式实现的关键是如何将作用于元素的操作分离出来封装成独立的类，其基本结构与实现方法如下。")]),v._v(" "),_("p",[v._v("访问者模式包含以下主要角色。")]),v._v(" "),_("ol",[_("li",[v._v("抽象访问者（Visitor）角色：定义一个访问具体元素的接口，为每个具体元素类对应一个访问操作 visit() ，该操作中的参数类型标识了被访问的具体元素。")]),v._v(" "),_("li",[v._v("具体访问者（ConcreteVisitor）角色：实现抽象访问者角色中声明的各个访问操作，确定访问者访问一个元素时该做什么。")]),v._v(" "),_("li",[v._v("抽象元素（Element）角色：声明一个包含接受操作 accept() 的接口，被接受的访问者对象作为 accept() 方法的参数。")]),v._v(" "),_("li",[v._v("具体元素（ConcreteElement）角色：实现抽象元素角色提供的 accept() 操作，其方法体通常都是 visitor.visit(this) ，另外具体元素中可能还包含本身业务逻辑的相关操作。")]),v._v(" "),_("li",[v._v("对象结构（Object Structure）角色：是一个包含元素角色的容器，提供让访问者对象遍历容器中的所有元素的方法，通常由 List、Set、Map 等聚合类实现。")])]),v._v(" "),_("h3",{attrs:{id:"访问者模式的使用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#访问者模式的使用场景"}},[v._v("#")]),v._v(" 访问者模式的使用场景")]),v._v(" "),_("p",[v._v("当系统中存在类型数量稳定（固定）的一类数据结构时，可以使用访问者模式方便地实现对该类型所有数据结构的不同操作，而又不会对数据产生任何副作用（脏数据）。")]),v._v(" "),_("p",[v._v("简而言之，就是当对集合中的不同类型数据（类型数量稳定）进行多种操作时，使用访问者模式。")]),v._v(" "),_("p",[v._v("通常在以下情况可以考虑使用访问者（Visitor）模式。")]),v._v(" "),_("ol",[_("li",[v._v("对象结构相对稳定，但其操作算法经常变化的程序。")]),v._v(" "),_("li",[v._v("对象结构中的对象需要提供多种不同且不相关的操作，而且要避免让这些操作的变化影响对象的结构。")]),v._v(" "),_("li",[v._v("对象结构包含很多类型的对象，希望对这些对象实施一些依赖于其具体类型的操作。")])]),v._v(" "),_("h2",{attrs:{id:"备忘录模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#备忘录模式"}},[v._v("#")]),v._v(" 备忘录模式")]),v._v(" "),_("h3",{attrs:{id:"备忘录模式的定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#备忘录模式的定义"}},[v._v("#")]),v._v(" 备忘录模式的定义")]),v._v(" "),_("p",[v._v("备忘录（Memento）模式的定义：在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态，以便以后当需要时能将该对象恢复到原先保存的状态。该模式又叫快照模式。")]),v._v(" "),_("h3",{attrs:{id:"备忘录模式的优缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#备忘录模式的优缺点"}},[v._v("#")]),v._v(" 备忘录模式的优缺点")]),v._v(" "),_("p",[v._v("备忘录模式是一种对象行为型模式，其主要优点如下。")]),v._v(" "),_("ul",[_("li",[v._v("提供了一种可以恢复状态的机制。当用户需要时能够比较方便地将数据恢复到某个历史的状态。")]),v._v(" "),_("li",[v._v("实现了内部状态的封装。除了创建它的发起人之外，其他对象都不能够访问这些状态信息。")]),v._v(" "),_("li",[v._v("简化了发起人。发起人不需要管理和保存其内部状态的各个备份，所有状态信息都保存在备忘录中，并由管理者进行管理，这符合单一职责原则。")])]),v._v(" "),_("p",[v._v("其主要缺点是：资源消耗大。如果要保存的内部状态信息过多或者特别频繁，将会占用比较大的内存资源。")]),v._v(" "),_("h3",{attrs:{id:"备忘录模式的结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#备忘录模式的结构"}},[v._v("#")]),v._v(" 备忘录模式的结构")]),v._v(" "),_("p",[v._v("备忘录模式的核心是设计备忘录类以及用于管理备忘录的管理者类，现在我们来学习其结构与实现。")]),v._v(" "),_("p",[v._v("备忘录模式的主要角色如下。")]),v._v(" "),_("ol",[_("li",[v._v("发起人（Originator）角色：记录当前时刻的内部状态信息，提供创建备忘录和恢复备忘录数据的功能，实现其他业务功能，它可以访问备忘录里的所有信息。")]),v._v(" "),_("li",[v._v("备忘录（Memento）角色：负责存储发起人的内部状态，在需要的时候提供这些内部状态给发起人。")]),v._v(" "),_("li",[v._v("管理者（Caretaker）角色：对备忘录进行管理，提供保存与获取备忘录的功能，但其不能对备忘录的内容进行访问与修改。")])]),v._v(" "),_("h3",{attrs:{id:"备忘录模式使用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#备忘录模式使用场景"}},[v._v("#")]),v._v(" 备忘录模式使用场景")]),v._v(" "),_("p",[v._v("该模式的以下应用场景。")]),v._v(" "),_("ol",[_("li",[v._v("需要保存与恢复数据的场景，如玩游戏时的中间结果的存档功能。")]),v._v(" "),_("li",[v._v("需要提供一个可回滚操作的场景，如 Word、记事本、Photoshop，Eclipse 等软件在编辑时按 Ctrl+Z 组合键，还有数据库中事务操作。")])]),v._v(" "),_("h2",{attrs:{id:"解释器模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解释器模式"}},[v._v("#")]),v._v(" 解释器模式")]),v._v(" "),_("h3",{attrs:{id:"解释器模式的定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解释器模式的定义"}},[v._v("#")]),v._v(" 解释器模式的定义")])])}),[],!1,null,null,null);_.default=r.exports}}]);