import React from 'react'
import AlbifinMart from "../Albifin Mart.png";

const login = () => {
  return (
    <section className="hero is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form className="box">
                <img className="m-3" src={AlbifinMart} width="200" height="30" alt="logo" />
                <p className="has-text-centered mb-4"></p>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input type="text" className="input" value="" placeholder="Email"/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input type="password" className="input" value="" placeholder="Password"/>
                  </div>
                </div>
                <div className="field mt-5">
                  <button type="submit" className="button is-info is-fullwidth"> Masuk </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default login