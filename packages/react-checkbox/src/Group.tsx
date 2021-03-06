import React, { useState } from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';
import './style/group.less';

export type Value = string[] & number[];
export interface CheckboxGroupPorps
  extends IProps,
    Omit<HTMLDivProps, 'onChange'> {
  value?: Value;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, values: Value) => void;
}

export function CheckboxGroup(props: CheckboxGroupPorps = {}) {
  const {
    prefixCls = 'w-checkbox-group',
    className,
    name,
    value,
    onChange,
    ...other
  } = props;
  const [values, setValues] = useState<Value>([]);
  if (values !== value) {
    setValues(value || []);
  }

  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  return (
    <div {...other} className={cls}>
      {React.Children.map(props.children, (element: any) => {
        if (value && value.includes(element.props.value)) {
          if (!values.includes(element.props.value)) {
            values.push(element.props.value);
          }
        }
        return React.cloneElement(
          element,
          Object.assign({}, element.props, {
            name,
            checked: (value as Value).includes(element.props.value),
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              const checked = e.target.checked;
              const include = values.includes(element.props.value);
              let val = [...values] as Value;
              if (!include && checked) {
                val.push(element.props.value);
              } else if (include && !checked) {
                val = values.filter(
                  (val) => val !== element.props.value,
                ) as Value;
              }
              setValues(val);
              onChange && onChange(e, val);
            },
          }),
        );
      })}
    </div>
  );
}
