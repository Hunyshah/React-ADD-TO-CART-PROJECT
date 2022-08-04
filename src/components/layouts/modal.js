import ReactDom from 'react-dom'

const Backdrop=(props)=>{
    return(<>
    <div>
        
    </div>
    </>)
}
const Overlays=(props)=>{
    return(<>
    <div>
    <div>{props.children}</div>
    </div>
    
    </>)
}
const elementdata=document.getElementById('overlays');
const Modal=(props)=>{
    return(<><div>
{ReactDom.createPortal(<Backdrop/>,elementdata)}
{ReactDom.createPortal(<Overlays>{props.children}</Overlays>,elementdata)}
</div></>)
};
export default Modal;
