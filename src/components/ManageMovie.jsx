import React, {Component} from 'react';
import axios from 'axios';
import '../supports/css/tabelmanage.css';


class ManageMovie extends Component{
    state = {listMovie: [], selectedEditId: 0}

    componentDidMount(){
        axios.get('http://localhost:2000/getmovielist')
        .then((res)=>{
        this.setState({listMovie:res.data})
        })
    }

    onBtnAddClick = () => {
        axios.post('http://localhost:2000/addmovie', {
            nama: this.refs.AddNama.value,
            tahun: this.refs.AddTahun.value,
            description: this.refs.AddDesc.value
        })
        .then((res) => {
            alert("Add Movie Success!")
            this.setState({listMovie:res.data})
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    onBtnDeleteClick = (id) => {
        if(window.confirm('Are you sure to delete?')) {
            axios.delete('http://localhost:2000/deletemovie/' + id)
            .then((res) => {
                alert('Delete Success');
            })
            .catch((err) => {
                alert('Error')
                console.log(err);
            })
        }
    }

    onBtnSaveClick = (id) => {
        axios.put('http://localhost:2000/editmovie/' + id, {
            nama: this.refs.EditNama.value,
            tahun: this.refs.EditTahun.value,
            description: this.refs.EditDesc.value,
        })
        .then((res) => {
            alert("Edit Product Success")
            this.setState({ listMovie: res.data, selectedEditId: 0 })
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    renderMovieList = () => {
        var listJSX = this.state.listMovie.map((item) => {
            if(item.id === this.state.selectedEditId) {
                return (
                    <tr>
                        <td></td>
                        <td><input type="text" ref="EditNama" defaultValue={item.nama} /></td>
                        <td><input type="text" ref="EditTahun" defaultValue={item.tahun} /></td>
                        <td><input type="text" ref="EditDesc" defaultValue={item.description} /></td>
                        <td><input type="button" class="btn btn-primary" value="Cancel" onClick={() => this.setState({ selectedEditId: 0 })} /></td>
                        <td><input type="button" class="btn btn-primary" value="Save" onClick={() => this.onBtnSaveClick(item.id)} /></td>
                    </tr>
                )
            }
            return (
                <tr>
                    <td>{item.id}</td>
                    <td>{item.nama}</td>
                    <td>{item.tahun}</td>
                    <td>{item.description}</td>
                    <td><input type="button" class="btn btn-primary" value="Edit" onClick={() => this.setState({selectedEditId:item.id})} /></td>
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
                <h1>Movie List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nama</th>
                            <th>Tahun</th>
                            <th>Description</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMovieList()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td><input type="text" ref="AddNama" placeholder="Masukan Judul Movie"/></td>
                            <td><input type="text" ref="AddTahun" placeholder="Masukan Tahun"/></td>
                            <td><input type="text" ref="AddDesc" placeholder="Masukan Deskripsi"/></td>
                            <td></td>
                            <td><input type="button" class="btn btn-success" value="Add" onClick={this.onBtnAddClick} /></td>
                        </tr>
                    </tfoot>
                </table>
            </center>
            </div>
        )
    }
}

export default ManageMovie;
