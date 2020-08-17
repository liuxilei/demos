import React, { useEffect } from "react";
import { Input, Button, List } from "antd";
import {
	setInputValue,
	addTodoItem,
	deleteTodoItem,
	getTolist,
	getInitList,
} from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const TodoList = (props) => {
	const {
		inputValue,
		list,
		setInputValue,
		addTodoItem,
		deleteTodoItem,
		getTolist,
		getInitList,
	} = props;

	useEffect(() => {
		//redux-thunk的方式
		//getTolist();

		//redux-saga的方式
		getInitList();
	}, []);

	return (
		<div style={{ marginTop: "10px", marginLeft: "10px" }}>
			<div>
				<Input
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder="todo Info"
					style={{ width: "300px", marginRight: "10px" }}
				/>
				<Button type="primary" onClick={addTodoItem}>
					提交
				</Button>
			</div>
			<List
				style={{ marginTop: "10px", width: "300px" }}
				bordered
				dataSource={list}
				renderItem={(item, index) => (
					<List.Item
						key={index}
						onClick={() => deleteTodoItem(index)}
					>
						{item}
					</List.Item>
				)}
			/>
		</div>
	);
};

// const mapStateToProps = (state) => ({
//     inputValue: state.getIn(["Todolist", "inputValue"]),
//     list: Todolist.list
// });

const mapStateToProps = ({ Todolist }) => ({
	inputValue: Todolist.get("inputValue"),
	list: Todolist.get("list"),
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			setInputValue,
			addTodoItem,
			deleteTodoItem,
			getTolist,
			getInitList,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
