import React from 'react'
import Box from '@/views/hoc/box';

//  想要注入的属性类型声明
interface IInjectProp {
  visible: boolean;
}

//  注入 IInjectProp 属性并动态创建新组件的方法
function injectComp<P extends object>(Comp: React.ComponentClass<P>) {
  type IInjectedProp = P & IInjectProp;
  return class InjectedComp extends React.Component<IInjectedProp> {
    public render() {
      const { visible, ...rest } = this.props;
      return (
        visible ? (
          <Comp {...rest}/>
        ) : (
          <div>nothing here...</div>
        )
      )
    }
  }
}

//  经注入属性后的高阶组件
export const InjectedBox = injectComp(Box);