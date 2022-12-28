import React from "react";

const EditKategoriManager= () => {
  return (        
        <div>
            <h2 className="subtitle mt-2">Edit Kategori</h2>
                <div className="card is-shadowless">
                <div className="card-content">
                <div className="content">
                    <form onSubmit="">
                    <p className="has-text-centered"></p>
                    <div className="field">
                        <label className="label">Nama Kategori</label>
                        <div className="control">
                        <input type="text" className="input" value="" onChange="" placeholder="Nama"/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                        <button type="submit" className="button is-success">
                            Save
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default EditKategoriManager;