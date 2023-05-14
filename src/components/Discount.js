import React from 'react'

const Discount = () => {
  return (
    <>
    <section id='discount'>
        <div className="container">
            <h3>Get Discount Info</h3>
            <p>
            Subscribe to the Outstock mailing list to receive updates on new arrivals, special offers <br />
             and other discount information.
            </p>
                <form>
                <input type="text" placeholder='Your email address...' />
                <button>Subcribe</button>
                </form>
        </div>
    </section>
    </>
  )
}

export default Discount