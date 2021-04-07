/**
 * Tablo baslilarini ve her bir balik türü bir tablo satiri olacak sikilde tablo olusturuyoruz 
 */
 import Table from 'react-bootstrap/Table';
 const Fish = (props) => {
     return(
     <Table striped bordered hover variant="dark">
   <thead>
     <tr>
       <th>Id</th>
       <th>Fish Type</th>
       <th>Price</th>
       <th>Duration in Days</th>
       <th>Origin Country</th>
       <th>Season</th>
       <th>Stock Volume in Kg</th>
       <th>Sale Locations</th>
     </tr>
   </thead>
   <tbody>
   <tr>
     <td>{(props.index)+1}</td>
       <td>{props.fish.fishType}</td>
       <td>{props.fish.price}</td>
       <td>{props.fish.durationInDays}</td>
       <td>{props.fish.originCountry}</td>
       <td>{props.fish.season}</td>
       <td>{props.fish.stockVolumeInKg}</td>
       <td>{props.fish.saleLocations}</td>
     </tr>
 
   </tbody>
 </Table>
 );
 }
 
 export default Fish;