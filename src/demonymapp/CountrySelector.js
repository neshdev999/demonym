import React, { Component } from 'react';
import './CountrySelector.css';

class CountrySelector extends Component{

    changeSelection(value){
        if(value === "None"){
            this.props.changeHandler(null);
        } else{
            // find the country selected
            const country = this.props.countries.find(country => country.country === value);
            this.props.changeHandler(country);
        }
    }

    render(){
        const options = this.props.countries.map(
            (country, i) => <option value={country.country} key={i}>{country.country}</option>
            );
        return(
            <div className="country_selector">
                <form className="selectorForm">
                    <label htmlFor="country" className="selectorFormItem">
                        Select a country
                    </label>
                    <select id="country" name="country" onChange = {e => this.changeSelection(e.target.value)} className="selectorFormItem">
                        <option value="None">Select one...</option>
                        {options}
                    </select>
                </form>
            </div>
        );
    }
}

CountrySelector.defaultProps = {
    countries: []
};

export default CountrySelector;

