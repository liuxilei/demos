import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <Fragment>
        <h1>demo-lists：</h1>
        <ul>
            <li><Link to="/g6try">G6的尝试练习</Link></li>
            <li><Link to="/init">Init</Link></li>
            <li><Link to="/monacoTest">MonacoTest</Link></li>
            <li><Link to="/propschange">测试用</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/refdemo">ref使用例子</Link></li>
            {/* <li><Link to="/svganimation">SvgAnimation</Link></li> */}
        </ul>
    </Fragment>
)