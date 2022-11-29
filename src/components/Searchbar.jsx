/*import React, {useState} from 'react'


const searchBar = () => {

 const [searchInput, setSearchInput] = useState("");

 const excercises = [

  {  },

];

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

if (searchInput.length > 0) {
    excercises.filter((excersise) => {
    return excersise.muscle.match(searchInput);
});
}

return <div>

<input
   type="search"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />

<table>
  <tr>
    
    <th>Muscle</th>
  </tr>

{excercises.map((excersise) => {

<div>
  <tr>
    
    <td>{excersise.muscle}</td>
  </tr>
</div>

})}
</table>

</div>


};

export default searchBar; */