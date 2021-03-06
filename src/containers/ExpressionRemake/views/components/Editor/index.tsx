import { Fragment } from "react";
import { useDrop } from "react-dnd";
import cls from "classnames";
import styles from "./index.less";

interface selected {
	id: any;
	title: string;
	type: string;
}


interface Props1 {
	elementInfo: selected;
	setSelected: (elementInfo: selected) => void;
	selected: selected
}

const DropIndex = ({ elementInfo, setSelected, selected }: Props1) => {
	//设置index(指标)放置
	const [, dropIndex] = useDrop({
		accept: "index",
		drop: () => ({ type: "index", newElement: elementInfo }),
	});
	return (
		<div
			className={cls({
				[`${elementInfo.type}`]: true,
				selected: selected.id === elementInfo.id,
			})}
			contentEditable={false}
			onClick={setSelected.bind(this, elementInfo)}
			ref={dropIndex}
		>
			{elementInfo.title}
			{}
		</div>
	);
};


interface Props2 {
	selected: selected;
	setSelected: (selected: selected) => void;
	elements: Array<selected>
}


export default (props: Props2) => {
	//设置整个editor放置
	const [, dropEditor] = useDrop({
		accept: "index",
		drop: () => ({ type: "Editor" }),
	});

	const { selected, setSelected, elements } = props;
	return (
		<div className={styles.editor} ref={dropEditor}>
			<div className="assist"></div>
			{elements.map((item) => {
				return (
					<Fragment key={item.id}>
						<DropIndex
							elementInfo={item}
							setSelected={setSelected}
							selected={selected}
						/>
						<div className="assist"></div>
					</Fragment>
				);
			})}
		</div>
	);
};
