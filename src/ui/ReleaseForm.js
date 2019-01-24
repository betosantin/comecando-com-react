import React from 'react';

const ReleaseForm = ({ submitHandler }) => {
    let _releaseName, _releaseDate;

    const handleSubmit = (e) => {
        submitHandler(e, { name: _releaseName.value, date: _releaseDate.value });

        clearForm();
    }

    const clearForm = () => {
        _releaseName.value = '';
        _releaseDate.value = '';
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-inline">
                <label className="sr-only" for="inlineFormInputName2">Release Name</label>
                <input type="text" className="form-control mb-2 mr-sm-2"
                    id="inlineFormInputName2" placeholder="Release Name"
                    ref={input => _releaseName = input} />

                <label className="sr-only" for="inlineFormInputGroupData">Data</label>
                <div className="input-group mb-2 mr-sm-2">
                    <div className="input-group-prepend">
                    </div>
                    <input type="text" className="form-control"
                        id="inlineFormInputGroupData" placeholder="Data"
                        ref={input => _releaseDate = input} />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Save</button>
            </form>
        </div>
    )
};

export default ReleaseForm;