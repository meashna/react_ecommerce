import React from 'react'

const FooterMiddleList = ({title,listItem}) => {
   
  return (
    <div className='p-2 m-3'>
      <h3 className="font-titleFont text-white text-base font-semibold mb-3">
        {title}
      </h3>
      <ul className="flex flex-col gap-2 font-bodyFont">
        {listItem.map((item) =>
          item.listData.map((data,i) => <li key={i} className="footerLink">{data}</li>)
        )}
      </ul>
    </div>
  );
}

export default FooterMiddleList