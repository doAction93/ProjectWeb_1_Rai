import React from 'react'
import style from '../pages/404page/404page.module.scss';


function Error() {
  return (
    <>
      <section className={style.error_section}>
        <article>
        <div className={style.error_img}>
        </div>

          <div className={style.error_contents}>
          <span><strong>SORRY</strong></span>
          <p>Ooops!! Page is gone.</p>
          <p>We're sorry, but the page you're looking for can't be found. </p>
          <p> Would you like to go back to the previous page or visit our homepage? </p>
          <a href='./main'>go home</a>
          </div>
        </article>
      </section>
    </>
  )
}

export default Error
