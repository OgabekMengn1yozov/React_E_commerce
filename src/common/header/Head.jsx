import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label><a href="tel: +998915865494" className="telegram">+998915865494</a></label>
            <i className='fa fa-envelope'></i>
            <label> <a href="mailto:mengniyozovogabek05@gmail.com" className="telegram">mengniyozovogabek05@gmail.com</a> </label>
            <label><a href="https://t.me/ogabek_mengniyozov_pm" className="telegram">Telegram</a></label>
          </div>
          <div className='right row RText'>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
