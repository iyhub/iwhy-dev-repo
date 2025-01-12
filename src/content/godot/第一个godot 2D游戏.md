# 第一个godot2d游戏开发记录

## 1.创建项目



![image-20241019下午83809714](https://imgs.iwhy.dev/2024/10/753f4749e92b09da602ec42927fda7d2.png)

## 准备目录

![image-20241019下午84410103](https://imgs.iwhy.dev/2024/10/e01720b83809a9ea608c18e00d2486d3.png)

## 制作游戏主场景

新建2D场景作为根节点

![image-20241019下午84121149](https://imgs.iwhy.dev/2024/10/57690baa7099a63c6dccb1160e6a0e33.png)

双击重命名为Game

![image-20241019下午84201846](https://imgs.iwhy.dev/2024/10/38ab43a57ddab6dc8471239350cd55bb.png)

### 搞个helllo world先爽一把

增加一个lebel,用于显示hello godot

### ![image-20241019下午84715499](https://imgs.iwhy.dev/2024/10/bbe26d8a3ce76696b6a01599d8df9041.png)

### 编辑文本显示内容

![image-20241019下午84910278](https://imgs.iwhy.dev/2024/10/2e7b29d68c2379186279989ccb3c90f4.png)

点击选择当前

![image-20241019下午84924231](https://imgs.iwhy.dev/2024/10/c73aac5a545f92a177667bb53a61327c.png)

### hello godot最终结果

![image-20241019下午85022648](https://imgs.iwhy.dev/2024/10/356cb611cb962497e72dcf6a011ee26f.png)

### 增加一个[角色]场景

![image-20241019下午85240084](https://imgs.iwhy.dev/2024/10/e8bd77bcafb4f68d4b614b7a21e74efe.png)

增加碰撞子节点,角色会碰撞其他物体

![image-20241019下午85526328](https://imgs.iwhy.dev/2024/10/8c6bbb0e6c3204b56f9c135f7324476b.png)

![image-20241019下午85629715](https://imgs.iwhy.dev/2024/10/3e18a3e607205a53c7507910d35e92d5.png)

创建角色帧动画

![image-20241019下午85737479](https://imgs.iwhy.dev/2024/10/ad008309ba6afc4e41e66fcdad9b8931.png)

![image-20241019下午85832956](https://imgs.iwhy.dev/2024/10/92d542aa6047b64c9506fecfade4752c.png)

![image-20241019下午85924144](https://imgs.iwhy.dev/2024/10/085f69020fd6ea6a79263a92882d6884.png)

![image-20241019下午90010154](https://imgs.iwhy.dev/2024/10/c76b40ecc0d141578fcd45db15c7f366.png)

修改角色描边方式,防止像素风格的图片模糊,设置为[nearest]

![image-20241019下午91155561](https://imgs.iwhy.dev/2024/10/eb049762ab07b1ef30ed1b36e1c3325a.png)

设置角色碰撞体的范围

![image-20241019下午90110220](https://imgs.iwhy.dev/2024/10/ebeb55b05212d5006f16dbc8710874df.png)

将player添加到游戏主场景

![image-20241019下午91552724](https://imgs.iwhy.dev/2024/10/ae965be9cfc497c7a033cf0cec387834.png)

运行效果[此时你的骑士应该是动态在走]

![image-20241019下午91612065](https://imgs.iwhy.dev/2024/10/7ef69c5508ba29669adfde14235b276b.png)

## 让角色允许被你控制

打开玩家场景,然后点击添加脚本	

![image-20241019下午91755826](https://imgs.iwhy.dev/2024/10/7519d8e3713371eafc37b872f4e09a19.png)

报存为player.gd 在scripts下

![image-20241019下午91907697](https://imgs.iwhy.dev/2024/10/3b6b96d7f0dd692b6751b5b48475cf42.png)

![image-20241019下午92039035](https://imgs.iwhy.dev/2024/10/842087120f3054d0a48150edbf35cff9.png)

此时你点击运行,你会发现你的角色会掉下去,因为脚本为角色添加了重力,但是当前游戏场景下还没有,其他的碰撞节点能阻止角色下落,此时我们添加一个静态的碰撞节点先看效果

![image-20241019下午92331166](https://imgs.iwhy.dev/2024/10/a385f8f42a61b966104a893d5f936f23.png)

设置碰撞节点的碰撞范围,添加碰撞子节点

![image-20241019下午92600597](https://imgs.iwhy.dev/2024/10/3c52feaf3bcb20338178080213c954ab.png)

设置碰撞形状

![image-20241019下午92640202](https://imgs.iwhy.dev/2024/10/18584dbb2f729dfe739da7485f0fff07.png)

将碰撞形状移动到角色下方

![image-20241019下午92735623](https://imgs.iwhy.dev/2024/10/b81ab846f6ec50a3c05586d4295297a7.png)

运行测试,按下空格和方向键试试,应该可以控制角色移动

![截屏2024-10-19 下午9.29.42](https://imgs.iwhy.dev/2024/10/0b333f12f49fab4346f36281bdaa80d1.png)

添加中景,游戏台阶

![image-20241019下午94530738](https://imgs.iwhy.dev/2024/10/1497fa391d556c81d467a3e93efc8c63.png)

新建tierset

![image-20241019下午94601539](https://imgs.iwhy.dev/2024/10/f8e1b9c93e8c9c2f67010f037ef6fc00.png)

![image-20241019下午94710671](https://imgs.iwhy.dev/2024/10/f79d04e77347f0e37c38847646543505.png)

擦除一部分自动化错误的块,将他们作为一个整体,先使用橡皮擦拆除,然后取消橡皮擦,选中一部分作为整体

![image-20241019下午94929265](https://imgs.iwhy.dev/2024/10/8935a368bbed0e9191242b67607dec52.png)

设置地图元素为物理节点

![image-20241019下午95634378](https://imgs.iwhy.dev/2024/10/9f35212d0ab4243049a4cc34c51b8140.png)

设置相机并跟随玩家,并添加丝滑效果,并设置最多跟随到下方多少

将相机设置为玩家的子节点,

![image-20241019下午100923867](https://imgs.iwhy.dev/2024/10/32379fd9519a2faecb0c3a7d47dd3488.png)

## 添加一些动态元素(比如:玩家需要电梯)

创建组件的父节点使用`AnimatableBody2D`

![image-20241019下午101317078](https://imgs.iwhy.dev/2024/10/00981730932824c753a3cf032129163b.png)

先定义这个组件账号长什么样式

![image-20241019下午101628820](https://imgs.iwhy.dev/2024/10/7d4d4101c6eed2f945785270bb444fda.png)

![image-20241019下午101651146](https://imgs.iwhy.dev/2024/10/99f2c9ff004883893e27e6ebb6fa2398.png)

编辑精灵图显示的区域

![image-20241019下午102231819](https://imgs.iwhy.dev/2024/10/b281c8c98114f0abfeae5ec0ab5f394c.png)

为电梯组件添加碰撞体

![image-20241019下午102505110](https://imgs.iwhy.dev/2024/10/1bb76cde959c0504cdccca2cebc91302.png)

拖动组件到游戏

![image-20241019下午103020117](https://imgs.iwhy.dev/2024/10/14740f7619f817fdd8baa4091004822e.png)

为组件添加动画播放器

![image-20241019下午103500682](https://imgs.iwhy.dev/2024/10/c9db8d420d7d9aa5e2c9daff47f485fe.png)

创建动画效果,打关键帧

![image-20241019下午103528685](https://imgs.iwhy.dev/2024/10/31f797170e4e4095c15f79064d4202f7.png)



选中动画组件,添加初始帧

![image-20241019下午103833555](https://imgs.iwhy.dev/2024/10/e7743a58dc683d1f6167d209d05bcea2.png)



![image-20241019下午103949238](https://imgs.iwhy.dev/2024/10/3231a213b11c6ffaf869ec163a0ab4da.png)



拖动时间轴,移动组件,打结束帧

![image-20241019下午104307061](https://imgs.iwhy.dev/2024/10/a97cc69d2a4c4c6f16dd8656fe56e40f.png)

设置为自动播放,播放方式为来回播放

![image-20241019下午104400461](https://imgs.iwhy.dev/2024/10/61563248b2503a2e37c040a171ca1b87.png)



## 添加游戏背景

![image-20241019下午104759586](https://imgs.iwhy.dev/2024/10/6ad2ec5bc3c9c12faacbf992c8c95c2a.png)

添加`tileset`

![image-20241019下午104908078](https://imgs.iwhy.dev/2024/10/ade206daea909570578d7342c4504259.png)

其余步骤类似中景绘制

## 定制危险区域

这个组件我们只需要定义组件的行为.不需要定义组件的长相(定义脚本)

![image-20241019下午105935627](https://imgs.iwhy.dev/2024/10/e5d55244f27edc4d7dd3c405f18a834f.png)

添加脚本,存贮在scripts 文件夹下面

![image-20241019下午110111646](https://imgs.iwhy.dev/2024/10/af58a9a9b2d7939caa75fccf8ca0f63b.png)

![image-20241019下午110129514](https://imgs.iwhy.dev/2024/10/6365678df3cb950b223251a3a403fc36.png)

![image-20241019下午110227545](https://imgs.iwhy.dev/2024/10/e863ada0952497274176aef5342cd83a.png)

此时会自动重写方法:

```gd
func _on_body_entered(body: Node2D) -> void:
	get_tree().reload_current_scene()
```

添加倒计时组件,等待时间为0.6s

![image-20241019下午110418344](https://imgs.iwhy.dev/2024/10/50fc69542bd9a04ab9b41e41ecc7896a.png)

从左侧拖拽Timer到脚本区域,按下cmd(ctl) 释放鼠标

![image-20241019下午110537177](https://imgs.iwhy.dev/2024/10/0f3ccc9e951823eede1b6ffa0613fde7.png)

重写timeout 方法

![image-20241019下午110732308](https://imgs.iwhy.dev/2024/10/76ba8e49cbf529e1eefbf489beab1877.png)

![image-20241019下午110908453](https://imgs.iwhy.dev/2024/10/d112faf0cc0083507b3af184ff710a49.png)

在游戏中使用危险区域

![image-20241019下午111016935](https://imgs.iwhy.dev/2024/10/4c09c74eca552a85bcb325b2eb27c7c8.png)



![](https://imgs.iwhy.dev/2024/10/4c09c74eca552a85bcb325b2eb27c7c8.png)

![image-20241019下午111136368](https://imgs.iwhy.dev/2024/10/f65f58243e059551277450b210736bfd.png)

移动碰撞位置

![image-20241019下午111227840](https://imgs.iwhy.dev/2024/10/ac6c1814dc0f873a5dda00ebe49eeff4.png)

![image-20241019下午111314614](https://imgs.iwhy.dev/2024/10/d0a8edbe02e26339913e5e3a3269af24.png)

ok 一切正常,能重新进入游戏

## 制作敌人

![image-20241019下午111536523](https://imgs.iwhy.dev/2024/10/d6a0f01c13bbd29920b9756c38ca0fc7.png)



![image-20241019下午111839790](https://imgs.iwhy.dev/2024/10/082167efce2cf0de96f6007240b1a534.png)

动画设置为自动播放

![image-20241019下午112017138](https://imgs.iwhy.dev/2024/10/b26abde10e9a0154f0b2fd3d1839241c.png)