import React, { useState } from 'react';
import './OrderForm.css';

const OrderForm = () => {
    const [brandName, setBrandName] = useState('');
    const [logo, setLogo] = useState(null);
    const [category, setCategory] = useState('');
    const [suggestions, setSuggestions] = useState('');
    const [need, setNeed] = useState([]);

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            // Add the checked item to the array
            setNeed((prevNeeds) => [...prevNeeds, value]);
        } else {
            // Remove the unchecked item from the array
            setNeed((prevNeeds) => prevNeeds.filter((item) => item !== value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log({ brandName, logo, category, suggestions, need });
    };

    return (
        <div>
            <form className="brand-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <h1>Brand Identity Submission Form</h1>
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
                    <label>What do you need? </label>
                    <div className="checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                name="need"
                                value="cover-page"
                                checked={need.includes('cover-page')}
                                onChange={handleCheckboxChange}
                            />
                            Cover page
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="need"
                                value="stories"
                                checked={need.includes('stories')}
                                onChange={handleCheckboxChange}
                            />
                            Stories
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="need"
                                value="flyers"
                                checked={need.includes('flyers')}
                                onChange={handleCheckboxChange}
                            />
                            Flyers
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="need"
                                value="profile-image"
                                checked={need.includes('profile-image')}
                                onChange={handleCheckboxChange}
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
