import React, {useState} from 'react';
import './OrderForm.css';

const OrderForm = () => {

    const [brandName, setBrandName] = useState('');
    const [logo, setLogo] = useState(null);
    const [category, setCategory] = useState('');
    const [suggestions, setSuggestions] = useState('');
    const [need, setNeed] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log({ brandName, logo, category, suggestions, need });
    };

    return (
        <div>
            <h1>Fill the form</h1>
        <form className="brand-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="brandName">Brandname</label>
                <input
                    type="text"
                    id="brandName"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="logo">Upload Logo</label>
                <input
                    type="file"
                    id="logo"
                    onChange={(e) => setLogo(e.target.files[0])}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="category">Choose category</label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="">Select a category</option>
                    <option value="Education">Education</option>
                    <option value="Health">Health</option>
                    <option value="Sport">Sport</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Technology">Technology</option>
                    <option value="Food">Food</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="suggestions">Your suggestions</label>
                <textarea
                    id="suggestions"
                    value={suggestions}
                    onChange={(e) => setSuggestions(e.target.value)}
                    rows="4"
                    required
                />
            </div>

            <div className="form-group">
                <label>What do you need</label>
                <div className="radio-group">
                    <label>
                        <input
                            type="checkbox"
                            name="need"
                            value="cover-page"
                            checked={need === 'cover-page'}
                            onChange={(e) => setNeed(e.target.value)}
                            required
                        />
                        Cover page
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="need"
                            value="stories"
                            checked={need === 'stories'}
                            onChange={(e) => setNeed(e.target.value)}
                            required
                        />
                        Stories
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="need"
                            value="flyers"
                            checked={need === 'flyers'}
                            onChange={(e) => setNeed(e.target.value)}
                            required
                        />
                        Flyers
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="need"
                            value="profile-image"
                            checked={need === 'profile-image'}
                            onChange={(e) => setNeed(e.target.value)}
                            required
                        />
                        Profile image
                    </label>
                </div>
            </div>

            <button type="submit" className="submit-button">Submit</button>
        </form>
        </div>
    );
  };

  export default OrderForm;