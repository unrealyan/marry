/**
 * Created by unrealyan on 2017/2/4.
 * 入口文件
 */
import React from 'react';
import ReactDOM from 'react-dom';
let div = document.createElement('div');
div.id = 'app';
document.body.appendChild(div);
console.log(document.getElementById('app'));
ReactDOM.render(
	<div>react</div>,
	document.getElementById('app'),
);