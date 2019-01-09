import React,{Component} from 'react'

//表格中的标题
class ProductCategoryRow extends Component {
    render() {
        return (
            <tr><th colSpan="2">{this.props.category}</th></tr>
        )
    }
}
//表格中的数据
class ProductRow extends Component {
    render() {
        return (
            <tr><td>{this.props.product.name}</td><td>{this.props.product.price}</td></tr>
        )
    }
}
//table
class ProductTable extends Component {
    render() {
        var filterProductions = [];
        var lastCategory = null;
        this.props.productions.forEach((production) => {
            if(production.name.indexOf(this.props.searchText) === -1 || (this.props.inStockOnly && !production.stocked )) {
              return ;
            }
            if(lastCategory !== production.category) {
                filterProductions.push(<ProductCategoryRow key={production.category} category={production.category}/>)
            }
            lastCategory = production.category;
            filterProductions.push(<ProductRow product={production} key={production.name}/>)
        })
        return (
            <table>
                <thead><tr><th>Name</th><th>price</th></tr></thead>
                <tbody>{filterProductions}</tbody>
            </table>

        )
    }

}

//搜索bar
class SearchBar extends Component {
    constructor() {
        super()
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleStockChange = this.handleStockChange.bind(this);
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    handleFilterChange(e) {
        this.props.handleFilterChange(e.target.value);
    }
    handleStockChange(e) {
        this.props.handleStockChange(e.target.checked);
    }
    focusTextInput() {
        document.getElementById('search').focus();
    }
    render() {
        return (
            <div>
                <input type="text" 
                    placeholder="搜索" 
                    id="search"
                    value={this.props.filterText} 
                    onChange={this.handleFilterChange} 
                />
                <input type="checkbox"  
                    value={this.props.inStockOnly} 
                    onChange={this.handleStockChange}/>
            </div>
        )
    }

}

//整个搜索表格组合
class FilterableProductTable extends Component {
    constructor() {
        super()
        this.state = {
            filterText: '',
            inStockOnly: false,
        }
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleStockChange = this.handleStockChange.bind(this);
        this.inputTextRef = (element) => {
            console.log(element)
            this.inputText = element;
        }
    }
    handleStockChange(value) {
        this.setState({
            inStockOnly: value
        })
    }
    handleFilterChange(value) {
        this.setState({
            filterText: value
        })
    }
    componentDidMount() {
        console.log(this.inputText);
        this.inputText.focusTextInput();
    }
    render() {
        return (
            <div>
                <SearchBar 
                    filterText={this.state.filterText} 
                    inStockOnly={this.state.inStockOnly}
                    handleFilterChange={this.handleFilterChange}
                    handleStockChange={this.handleStockChange}
                    ref= {this.inputTextRef}
                />
                <ProductTable 
                    productions={this.props.products}
                    searchText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    />
            </div>
        )
    }

}

export default FilterableProductTable;