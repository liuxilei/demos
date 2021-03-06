import { Link } from "react-router-dom";
import styles from "./index.less";
import { logout } from "@/utils";
import history from "@/utils/history";

const titleLinks = [
	{
		url: "/BookKeeping",
		name: "记账",
		visible: true,
	},
	{
		url: "/todolist",
		name: "todoList",
		visible: true,
	},
	{
		url: "/g6try",
		name: "G6学习",
		visible: true,
	},
	{
		url: "/relationalExpression",
		name: "关系表达式",
		visible: true,
	},
	{
		url: "/ExpressionRemake",
		name: "表达式重置版（react-dnd）",
		visible: false,
	},
	{
		url: "/init",
		name: "Init",
		visible: false,
	},
	{
		url: "/counter",
		name: "计数器",
		visible: true,
	},
	{
		url: "/echartstest",
		name: "echarts",
		visible: true,
	},
	{
		url: "/mousetracker",
		name: "猫猫跟踪鼠标位置（render props实践）",
		visible: true,
	},
	{
		url: "/drag",
		name: "HTML5拖动示范",
		visible: true,
	},
	{
		url: "/dynamictab",
		name: "动态多tab页面",
		visible: true,
	},
	{
		url: "/SvgAnimal",
		name: "svg动画(点击按钮触发)",
		visible: true,
	},
	{
		url: "/ShortBook",
		name: "简书项目",
		visible: true,
	},
	{
		url: "/ReactDnDStudy",
		name: "ReactDnD示例",
		visible: true,
	},
	{
		url: "/ProjectList",
		name: "项目列表",
		visible: true
	},
	{
		url: "/AntdMobile",
		name: "antd-mobile测试",
		visible: true
	},
	{
		url: "/HookDemo",
		name: "HookDemo",
		visible: true
	},
	{
		url: "/HookTest",
		name: "Hook测试",
		visible: true
	},
	{
		url: "/Test",
		name: "测试页面",
		visible: true
	},
];
const handleLogout = () => {
	logout();
	history.replace("/login");
}
export default () => (
	<div className={styles.home}>
		<span onClick={handleLogout}>登出</span>
		<h1>demo-lists：</h1>
		<ul>
			{titleLinks.map((item) => {
				if (item.visible) {
					return (
						<li key={item.url}>
							<Link to={item.url}>{item.name}</Link>
						</li>
					);
				}
			})}
		</ul>

	</div>
);
