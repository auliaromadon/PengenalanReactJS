import React, {Component} from 'react';

class Konversibilangan extends Component {
    constructor() {
        super();
        this.state = {
            binner: 0,
            oktal : 0,
            desimal : 0,
            hexa : 0,
            konversi1: 0,
            konversi2: 0,
            konversi3: 0,
            konversi4: 0,
            hasildata1: 0,
            hasildata2: 0,
            hasildata3: 0,
            hasildata4: 0,
        }
    }
    bind = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }
    OperasiBinner = (event) => {
        event.preventDefault();
        let data = {
        binner: parseInt(this.state.binner),
        konversi1: parseInt(this.state.konversi1),
        }
        if(data.konversi1 === 0){
            this.setState({
                hasildata1: "Tolong Pilih Konversi Dengan Benar"
            })
        }else if(data.konversi1 === 2){
            var octal = parseInt(data.binner, 2).toString(8);
            this.setState({
                hasildata1: octal
            })
        }else if(data.konversi1 === 3){
            var digit = parseInt(data.binner, 2);
            this.setState({
                hasildata1: digit
            })
        }else if(data.konversi1 === 4){
            var hexa = parseInt(data.binner, 2).toString(16).toUpperCase(); 
            this.setState({
                hasildata1: hexa
            })                
        }else{
            this.setState({
                hasildata1: "Terjadi Kesalahan, Mohon Maaf"
            })  
        }   

    }
    OperasiOktal = (event) => {
        event.preventDefault();

        let data = {
        oktal: parseInt(this.state.oktal),
        konversi2: parseInt(this.state.konversi2),
        }

        if(data.konversi2 === 0){
            this.setState({
                hasildata2: "Tolong Pilih Konversi Dengan Benar"
            })
        }else if(data.konversi2 === 1){
            var binner = parseInt(data.oktal, 8).toString(2);
            this.setState({
                hasildata2: binner
            })
        }else if(data.konversi2 === 3){
            var digit = parseInt(data.oktal, 8).toString(10);
            this.setState({
                hasildata2: digit
            })
        }else if(data.konversi2 === 4){
            var hexa = parseInt(data.oktal, 8).toString(16).toUpperCase(); 
            this.setState({
                hasildata2: hexa
            })                
        }else{
            this.setState({
                hasildata2: "Terjadi Kesalahan, Mohon Maaf"
            })  
        }   

    }
    OperasiDesimal = (event) => {
        event.preventDefault();

        let data = {
        desimal: parseInt(this.state.desimal),
        konversi3: parseInt(this.state.konversi3),
        }

        if(data.konversi3 === 0){
            this.setState({
                hasildata3: "Tolong Pilih Konversi Dengan Benar"
            })
        }else if(data.konversi3 === 1){
            var binner = parseInt(data.desimal, 10).toString(2);
            this.setState({
                hasildata3: binner
            })
        }else if(data.konversi3 === 2){
            var oktal = parseInt(data.desimal, 10).toString(8);
            this.setState({
                hasildata3: oktal
            })
        }else if(data.konversi3 === 4){
            var hexa = parseInt(data.desimal, 10).toString(16).toUpperCase(); 
            this.setState({
                hasildata3: hexa
            })                
        }else{
            this.setState({
                hasildata3: "Terjadi Kesalahan, Mohon Maaf"
            })  
        }   

    }
    OperasiHexa = (event) => {
        event.preventDefault();

        let data = {
        hexa: this.state.hexa,
        konversi4: parseInt(this.state.konversi4),
        }

        if(data.konversi4 === 0){
            this.setState({
                hasildata4: "Tolong Pilih Konversi Dengan Benar"
            })
        }else if(data.konversi4 === 1){
            var binner = parseInt(data.hexa, 16).toString(2);
            this.setState({
                hasildata4: binner
            })
        }else if(data.konversi4 === 2){
            var oktal = parseInt(data.hexa, 16).toString(8);
            this.setState({
                hasildata4: oktal
            })
        }else if(data.konversi4 === 3){
            var digit = parseInt(data.hexa, 16).toString(10); 
            this.setState({
                hasildata4: digit
            })                
        }else{
            this.setState({
                hasildata4: "Terjadi Kesalahan, Mohon Maaf"
            })  
        }   

    }
    render(){
        return(
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <strong><center>Konversi Bilangan Binner</center></strong>
                    </div>
                    <form onSubmit={this.OperasiBinner}>  
                        <div className="modal-body">
                            Binner
                            <input type="number" name="binner"  
                            className="form-control" value={this.state.binner}
                            onChange={this.bind} required />
                            Pilihan Konversi
                            <select  name="konversi1" className="form-control" value={this.state.konversi1}
                            onChange={this.bind}>
                                <option value="0" >Pilih Konversi</option>
                                <option value="2" >Oktal</option>
                                <option value="3">Desimal</option>
                                <option value="4">Heksadesimal</option>
                            </select>  
                        </div>  
                        <div className="modal-footer">
                            <button style={{width:500, height:40}} className="btn btn-sm btn-danger" type="submit">  
                            Convert
                            </button>  
                        </div>
                    </form>
                    <div className="alert alert-danger">
                        <strong><center>{this.state.hasildata1}</center></strong> 
                    </div>
                </div>
                <div className="modal-content">
                    <div className="modal-header">
                        <strong><center>Konversi Bilangan Oktal</center></strong>
                    </div>
                    <form onSubmit={this.OperasiOktal}>  
                        <div className="modal-body">
                            Oktal
                            <input type="number" name="oktal"  
                            className="form-control" value={this.state.oktal}
                            onChange={this.bind} required />
                            Pilihan Konversi
                            <select  name="konversi2" className="form-control" value={this.state.konversi2}
                            onChange={this.bind}>
                                <option value="0" >Pilih Konversi</option>
                                <option value="1" >Binner</option>
                                <option value="3">Desimal</option>
                                <option value="4">Heksadesimal</option>
                            </select>  
                        </div>  
                        <div className="modal-footer">
                            <button style={{width:500, height:40}} className="btn btn-sm btn-danger" type="submit">  
                            Convert
                            </button>  
                        </div>
                    </form>
                    <div className="alert alert-danger">
                        <strong><center>{this.state.hasildata2}</center></strong> 
                    </div>
                </div>
                <div className="modal-content">
                    <div className="modal-header">
                        <strong><center>Konversi Bilangan Desimal</center></strong>
                    </div>
                    <form onSubmit={this.OperasiDesimal}>  
                        <div className="modal-body">
                            Desimal
                            <input type="number" name="desimal"  
                            className="form-control" value={this.state.desimal}
                            onChange={this.bind} required />
                            Pilihan Konversi
                            <select  name="konversi3" className="form-control" value={this.state.konversi3}
                            onChange={this.bind}>
                                <option value="0" >Pilih Konversi</option>
                                <option value="1" >Binner</option>
                                <option value="2">oktal</option>
                                <option value="4">Heksadesimal</option>
                            </select>  
                        </div>  
                        <div className="modal-footer">
                            <button style={{width:500, height:40}} className="btn btn-sm btn-danger" type="submit">  
                            Convert
                            </button>  
                        </div>
                    </form>
                    <div className="alert alert-danger">
                        <strong><center>{this.state.hasildata3}</center></strong> 
                    </div>
                </div>
                <div className="modal-content">
                    <div className="modal-header">
                        <strong><center>Konversi Bilangan Heksadesimal</center></strong>
                    </div>
                    <form onSubmit={this.OperasiHexa}>  
                        <div className="modal-body">
                            Heksadesimal
                            <input type="text" name="hexa"  
                            className="form-control" value={this.state.hexa}
                            onChange={this.bind} required />
                            Pilihan Konversi
                            <select  name="konversi4" className="form-control" value={this.state.konversi4}
                            onChange={this.bind}>
                                <option value="0" >Pilih Konversi</option>
                                <option value="1" >Binner</option>
                                <option value="2">oktal</option>
                                <option value="3">Desimal</option>
                            </select>  
                        </div>  
                        <div className="modal-footer">
                            <button style={{width:500, height:40}} className="btn btn-sm btn-danger" type="submit">  
                            Convert
                            </button>  
                        </div>
                    </form>
                    <div className="alert alert-danger">
                        <strong><center>{this.state.hasildata4}</center></strong> 
                    </div>
                </div>
            </div>  
            
        );
    }
}
export default Konversibilangan;