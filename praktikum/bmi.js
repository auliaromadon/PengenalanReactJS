import React, {Component} from 'react';

class Pegawai extends Component {
    constructor() {
        super();
        this.state = {
            data1: 0,
            data2: 0,
            hasil:"Hasilnya Akan Keluar Disini",
            hasidata: 0,
        }
    }
    bind = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }
        Operasi = (event) => {
            event.preventDefault();

            let data = {
            data1: this.state.data1,
            data2: this.state.data2,
            }
            let data_2 = data.data2/100
            let tinggi = data_2 * data_2
            let hasil = data.data1 / tinggi
            this.setState({
                hasildata: hasil
            })

            if(hasil < 18.5 ){
                this.setState({
                    hasil: "Kekurangan berat badan"
                })
            }else if(hasil >= 18.5 && hasil <= 24.9){
                this.setState({
                    hasil: "Normal (ideal)"
                })
            }else if(hasil >= 25 && hasil <= 29.9){
                this.setState({
                    hasil: "Kelebihanberat badan"
                })
            }else if(hasil >= 30){
                this.setState({
                    hasil: "Kegemukan (Obesitas)"
                })
            }else{
                this.setState({
                    hasil: "Data tidak terdeteksi"
                })
            }
        }
    render(){
        return(
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <center>Body Mass Index</center>
                    </div>
                    <form onSubmit={this.Operasi}>  
                        <div className="modal-body">
                            Berat
                            <input type="number" name="data1"  
                            className="form-control" value={this.state.data1}
                            onChange={this.bind} required />
                            Tinggi
                            <input type="number" name="data2" 
                            className="form-control" value={this.state.data2}
                            onChange={this.bind} required />   
                        </div>  
                        <div className="modal-footer">
                            <button style={{width:500}} className="btn btn-sm btn-success" type="submit">  
                            Hitung
                            </button>  
                        </div>
                    </form>
                    <div className="alert alert-success">
                        <strong><center>{this.state.hasil}</center></strong> 
                    </div>
                </div>
            </div>  
        );
    }
}
export default Pegawai;