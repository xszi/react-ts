import * as React from 'react';

//  原组件的类型声明及其实现
export interface IBoxProps {
  name: string;
  size: number;
}
export default class Box extends React.Component<IBoxProps> {
  public render() {
    const { name, size } = this.props;
    return (
      <div>{name} : {size}</div>
    );
  }
}