import React, {Component} from 'react';

class Pegawai extends Component {
    constructor() {
        super();
        this.state = {
            nominal: 0,
            bunga: 0,
            periode: 0,
            hasildata: 0,
        }
    }
    bind = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }
        Operasi = (event) => {
            event.preventDefault();
            let data = {
            nominal: this.state.nominal,
            bunga: this.state.bunga,
            periode: this.state.periode,
            }
            if(data.periode === 0){
                this.setState({
                    hasildata: "Tolong Pilih Periode Dengan Benar"
                })
            }else{
            let data_1 = data.nominal/ parseInt(data.periode)
            let data_bunga = (data.nominal*data.bunga/100)/parseInt(data.periode)
            let hasil_data = data_bunga + data_1

            this.setState({
                hasildata: hasil_data
            })
        }
        }
    render(){
        return(
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <center>Cicilan Bank</center>
                    </div>
                    <form onSubmit={this.Operasi}>  
                        <div className="modal-body">
                            Nominal
                            <input type="number" name="nominal"  
                            className="form-control" value={this.state.nominal}
                            onChange={this.bind} required />
                            Bunga
                            <input type="number" name="bunga" 
                            className="form-control" value={this.state.bunga}
                            onChange={this.bind} required />   
                            Periode   
                            <select  name="periode" className="form-control" value={this.state.periode}
                            onChange={this.bind}>
                                <option value="0" >Pilih Bulan</option>
                                <option value="6" >6 Bulan</option>
                                <option value="12"> 12 Bulan</option>
                            </select>
                        </div>  
                        <div className="modal-footer">
                            <button style={{width:500, height:40}} className="btn btn-sm btn-info" type="submit">  
                            Hitung
                            </button>  
                        </div>
                    </form>
                    <div className="alert alert-info">
                        <strong><center>Rp {this.state.hasildata}</center></strong> 
                    </div>
                </div>
            </div>  
        );
    }
}
export default Pegawai;