function Form() {
   return (
      <div className="tripForm">
         <p>What do you need for your 😍 trip?</p>
         <form className="form" action="">
            <select className="number" name="number" defaultValue={1}>
               <option value="1" selected>1</option>
               <option value="2" selected>2</option>
               <option value="3" selected>3</option>
               <option value="4" selected>4</option>
               <option value="5" selected>5</option>
               <option value="6" selected>6</option>
               <option value="7" selected>7</option>
               <option value="8" selected>8</option>
               <option value="9" selected>9</option>
               <option value="10" selected>10</option>
               <option value="11" selected>11</option>
               <option value="12" selected>12</option>
               <option value="13" selected>13</option>
               <option value="14" selected>14</option>
               <option value="15" selected>15</option>
               <option value="16" selected>16</option>
               <option value="17" selected>17</option>
               <option value="18" selected>18</option>
               <option value="19" selected>19</option>
               <option value="20" selected>20</option>
            </select>
            <input type="text" placeholder="Item..." name="item" required/>
            <button>ADD</button>
         </form>
      </div>
   );
}

export default Form;