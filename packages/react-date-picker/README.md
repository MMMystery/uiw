DatePicker 日期选择器
===

显示一个月的日历，并允许用户选择单个日期，常见的应用场景在表单中应用，请查看基于 `DatePicker` 的 [`DateInput`](#/components/date-input) 组件。

```jsx
import { DatePicker } from 'uiw';
// or
import DatePicker from '@uiw/react-date-picker';
```

### 基础用法

<!--DemoStart,bgWhite,codePen--> 
```js
import { DatePicker } from 'uiw';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date('2019-02-26 02:00:00'),
    };
  }
  onChange(selectedDate) {
    console.log('selectedDate:', selectedDate)
    this.setState({ date: selectedDate });
  }
  render() {
    return (
      <div>
        <DatePicker
          date={this.state.date}
          todayButton="今天"
          onChange={this.onChange.bind(this)}
        />
        <DatePicker
          showTime
          date={this.state.date}
          todayButton="今天"
          onChange={this.onChange.bind(this)}
        />
        <div>{this.state.date ? String(this.state.date) : 'no date'}</div>
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 显示时间

<!--DemoStart,bgWhite,codePen--> 
```js
import { DatePicker } from 'uiw';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
    };
  }
  onChange(selectedDate) {
    console.log('selectedDate:', selectedDate)
    this.setState({ date: selectedDate });
  }
  render() {
    return (
      <div>
        <DatePicker
          showTime
          date={this.state.date}
          todayButton="今天"
          onChange={this.onChange.bind(this)}
        />
        <div>{this.state.date ? String(this.state.date) : 'no date'}</div>
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 设置本地语言

<!--DemoStart,bgWhite,codePen--> 
```js
import { DatePicker } from 'uiw';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
    };
  }
  onChange(selectedDate) {
    console.log('selectedDate:', selectedDate)
    this.setState({ date: selectedDate });
  }
  render() {
    return (
      <div>
        <DatePicker
          todayButton="Today"
          weekTitle={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']}
          weekday={['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']}
          monthLabel={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']}
          date={this.state.date}
          onChange={this.onChange.bind(this)}
        />
        <div>{this.state.date ? String(this.state.date) : 'no date'}</div>
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 初始展示日期

<!--DemoStart,bgWhite,codePen--> 
```js
import { DatePicker } from 'uiw';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
    };
  }
  onChange(selectedDate) {
    this.setState({ date: selectedDate });
  }
  render() {
    return (
      <div>
        <DatePicker
          date={this.state.date}
          onChange={this.onChange.bind(this)}
        />
        <div>{this.state.date ? String(this.state.date) : 'no date'}</div>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 禁用时间

通过 `disabledDate` 方法设置，今天和今天之前不能选择。

<!--DemoStart,bgWhite,codePen--> 
```js
import { DatePicker } from 'uiw';

function disabledDate(currentDate) {
  // 今天和今天之前不能选择
  return currentDate && currentDate.valueOf() < Date.now();
}
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      // date: new Date(),
    };
  }
  onChange(selectedDate) {
    this.setState({ date: selectedDate });
  }
  render() {
    return (
      <div>
        <DatePicker
          disabledDate={disabledDate}
          date={this.state.date && new Date(this.state.date)}
          onChange={this.onChange.bind(this)}
        />
        <div>{this.state.date ? String(this.state.date) : 'no date'}</div>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

## 定制日历单元格

使用 `renderDay` 可以自定义日期单元格的内容和样式。

<!--DemoStart,bgWhite,codePen--> 
```js
import { DatePicker } from 'uiw';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
    };
  }
  onChange(selectedDate) {
    this.setState({ date: selectedDate });
  }
  render() {
    return (
      <div>
        <DatePicker
          date={this.state.date}
          renderDay={(day, props) => {
            const style = {}
            const week = props.date.getDay();
            if (week === 0 && !props.prev && !props.next) {
              style.border = '1px solid red';
            }
            return (
              <div style={style}> {day} </div>
            );
          }}
          onChange={this.onChange.bind(this)}
        />
        <div>{this.state.date ? String(this.state.date) : 'no date'}</div>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

## DatePicker

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| date | 选中的日期 | Date | - |
| panelDate | 日历面板默认展示哪一页 | Date | `new Date` |
| today | 默认高亮当天日期 | Date | `new Date` |
| todayButton | 展示回到今天按钮，和提示文本。 | String | - |
| showTime | 增加时间选择功能，当 showTime 为一个对象时，其属性会传递给内建的 [`<TimePicker />`](#/components/time-picker)。 | Boolean/Object | - |
| renderDay | 增加时间选择功能。 `end`: 周末，`prev`: 上个月，`next`：下个月 `@3.0.0+` | Function(day, { end: bool, prev: bool, next: bool, date: Date }) | - |
| disabledDate | 不可选择的日期，函数返回 `true` 当前日期被禁用无法选择。`end`: 周末，`prev`: 上个月，`next`：下个月 | Function(currentDate, { end: bool, prev: bool, next: bool }) | - |
| onChange | 选择一天时调用。 | (selectedDate?: Date, dateSource?: IDateSource) | - |
| weekTitle | 星期显示文本提示 | Array | \[`星期天`, `星期一`, `星期二`, `星期三`, `星期四`, `星期五`, `星期六`\] |
| weekday | 星期显示文本 | Array | \[`日`, `一`, `二`, `三`, `四`, `五`, `六`\] |
| monthLabel | 月份显示文本 | Array | \[`一月`, `二月`, `三月`, `四月`, `五月`, `六月`, `七月`, `八月`, `九月`, `十月`, `十一月`, `十二月`\] |

## DatePicker.showTime

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| defaultValue | 默认时间 | Date | - |
| disabled | 禁用全部操作 | Boolean | `false` |
| disabledHours | 禁止选择部分小时选项 | Function | - |
| disabledMinutes | 禁止选择部分分钟选项 | Function | - |
| disabledSeconds | 禁止选择部分秒选项 | Function | - |
| format | 禁止选择部分秒选项 | Function | `HH:mm:ss` |
| hourStep | 禁止选择部分秒选项 | Function | - |
