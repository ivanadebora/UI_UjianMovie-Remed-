import React, {Component} from 'react';
import axios from 'axios';
import '../supports/css/tabelmanage.css';


class ConnectMovCat extends Component{

    state = {listMovCat: [], selectedEditId: 0}

    componentDidMount(){
        axios.get('http://localhost:2000/getconnection')
        .then((res)=>{
        this.setState({listMovCat:res.data})
        })
    }

    onBtnAddClick = () => {
        axios.post('http://localhost:2000/addconnection', {
            namamovie: this.refs.AddNamaMovie.value,
            namacategory: this.refs.AddNamaCategory.value,
        })
        .then((res) => {
            alert("Add Movie Success!")
            this.setState({listMovCat : res.data})
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    onBtnDeleteClick = (id) => {
        if(window.confirm('Are you sure to delete?')) {
            axios.delete('http://localhost:2000/deleteconnection')
            .then((res) => {
                alert('Delete Success');
                this.setState({listMovCat : res.data})
            })
            .catch((err) => {
                alert('Error')
                console.log(err);
            })
        }
    }

    renderConnectList = () => {
        var listJSX = this.state.listMovCat.map((item) => {
            return (
                <tr>
                    <td>{item.namamovie}</td>
                    <td>{item.namacategory}</td>
                    <td><input type="button" class="btn btn-danger" value="Delete" onClick={() => this.onBtnDeleteClick(item.id)} /></td>
                </tr>
            )
        })
        return listJSX;
    }
    
    render(){
        return(
            <div>
            <center>
                <h1>Connection List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nama Movie</th>
                            <th>Nama Kategori</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderConnectList()}
                    </tbody>
                    <tfoot>
                    <td><input type="text" ref="AddNamaMovie" placeholder="Masukan Judul Movie"/></td>
                    <td><input type="text" ref="AddNamaCategory" placeholder="Masukan Nama Kategori"/></td>
                        <td><input type="button" class="btn btn-success" value="Add" onClick={this.onBtnAddClick} /></td>
                    </tfoot>
                </table>
            </center>
            </div>
        )
    }
}

export default ConnectMovCat;
