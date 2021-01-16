import React, {Component} from 'react';
class Harga extends Component {
    constructor() {
        super();
        this.state = {
            harga: 0,
            ppn: 0,
            diskon: 0,
            hasildata: 0,
        }
    }
    bind = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }
        Operasi = (event) => {
            event.preventDefault();
            let data = {
            harga: parseInt(this.state.harga),
            ppn: parseInt(this.state.ppn),
            diskon: parseInt(this.state.diskon),
            }
            let data_ppn = data.harga*(data.ppn/100)
            let data_diskon = data.harga*(data.diskon/100)
            let data_hasil = data.harga + data_ppn - data_diskon
            this.setState({
                hasildata: data_hasil
            })
        }
    render(){
        return(
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <center>Hitung Harga Akhir</center>
                    </div>
                    <form onSubmit={this.Operasi}>  
                        <div className="modal-body">
                            Harga Awal
                            <input type="number" name="harga"  
                            className="form-control" value={this.state.harga}
                            onChange={this.bind} required />
                            PPN
                            <input type="number" name="ppn" 
                            className="form-control" value={this.state.ppn}
                            onChange={this.bind} required />   
                            Diskon
                            <input type="number" name="diskon" 
                            className="form-control" value={this.state.diskon}
                            onChange={this.bind} required />
                        </div>  
                        <div className="modal-footer">
                            <button style={{width:500, height:40}} className="btn btn-sm btn-danger" type="submit">  
                            Hitung
                            </button>  
                        </div>
                    </form>
                    <strong><center>Harga Akhir</center></strong>
                    <div className="alert alert-danger">
                        <strong><center>Rp {this.state.hasildata}</center></strong> 
                    </div>
                </div>
            </div>  
        );
    }
}
export default Harga;