/* eslint-disable react/prop-types */
import css from './Container.module.css';
// const Container = (props)=>
//   {
// return <div className={css.container}>{props.children}</div>
//   }
//   export default Container;
  const Container = ({children})=>
    {
  return <div className={css.container}>{children}</div>
    }
    export default Container;