(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[649],{1328:function(n,e,a){"use strict";a.r(e),e.default='Rate \u8bc4\u5206\n===\n\n\u8bc4\u5206\u7ec4\u4ef6\n\n```jsx\nimport { Rate } from \'uiw\';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\u6309\u94ae\u6837\u5f0f\u7684\u5355\u9009\u7ec4\u5408\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Rate, Divider, Icon } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Rate value={3} />\n    <Divider />\n    <Rate color="#393E48" character="\u2606" value={4} />\n    <Divider />\n    <Rate color="#28a745" character={<Icon type="heart-on" />} value={3} />\n    <Divider />\n    <Rate color="#dc3545" character="\u273f" value={4} />\n  </div>\n)\n\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u53ea\u8bfb\n\n\u6309\u94ae\u6837\u5f0f\u7684\u5355\u9009\u7ec4\u5408\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Rate, Divider, Icon } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Rate readOnly value={3} />\n    <Divider />\n    <Rate readOnly character="\u2606" value={4} />\n    <Divider />\n    <Rate readOnly character={<Icon type="heart-on" />} value={3} />\n    <Divider />\n    <Rate readOnly character="\u273f" value={4} />\n  </div>\n)\n\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u6587\u672c\n\n\u6309\u94ae\u6837\u5f0f\u7684\u5355\u9009\u7ec4\u5408\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Rate, Divider } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Rate character="\u7f8e" value={4} />\n    <Divider />\n    <Rate color="#d80000" character="\u597d" value={3} />\n    <Divider />\n    <Rate character="\u4f20" value={4} />\n  </div>\n)\n\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u534a\u9009\u663e\u793a\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Rate, Divider, Icon } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Rate character={<Icon type="heart-on" />} value={3.3} />\n    <Divider />\n    <Rate color="#d80000" character={<Icon type="heart-on" />} value={4.3} />\n  </div>\n)\n\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u5c3a\u5bf8\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Rate, Divider, Icon } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Rate style={{ fontSize: 34 }} character={<Icon type="heart-on" />} value={3} />\n  </div>\n)\n\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## Rate\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| value | \u6839\u636e value \u8fdb\u884c\u6bd4\u8f83\uff0c\u5224\u65ad\u662f\u5426\u9009\u4e2d | Number | - |\n| count | star \u603b\u6570 | Number | `5` |\n| readOnly | \u53ea\u8bfb\uff0c\u65e0\u6cd5\u8fdb\u884c\u4ea4\u4e92 | Boolean | `false` |\n| character | \u81ea\u5b9a\u4e49\u5b57\u7b26 | ReactNode | - |\n| color | \u81ea\u5b9a\u4e49 Star \u7684\u989c\u8272 | String | - |\n| className | \u81ea\u5b9a\u4e49\u6837\u5f0f\u7c7b\u540d | String | - |\n| onChange | \u6570\u503c\u6539\u53d8\u65f6\u7684\u56de\u8c03\uff0c\u8fd4\u56de\u5f53\u524d\u503c | Funtcion(e:Even,value) | - |\n| onHoverChange | \u9f20\u6807\u7ecf\u8fc7\u65f6\u6570\u503c\u53d8\u5316\u7684\u56de\u8c03 | Funtcion(e:Even,value) | - |\n'}}]);