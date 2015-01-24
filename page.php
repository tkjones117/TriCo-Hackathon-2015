<!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="http://bootswatch.com/darkly/bootstrap.css">
  </head>


<form class="form-horizontal">
  <fieldset>
    <legend>Sell a Textbook</legend>
    
      <div class="form-group">
        <label for="select" class="col-lg-2 control-label">Department</label>
        <div class="col-lg-5">
        <select multiple="" class="form-control">
          <option>ANTH</option>
          <option>ARTH</option>
          <option>ASTR</option>
          <option>BIOL</option>
          <option>CHEM</option>
          <option>CHIN</option>
          <option>CLAS</option>
          <option>CLST</option>
          <option>CPSC</option>
          <option>DANC</option>
          <option>ECON</option>
          <option>EDUC</option>
          <option>ENGL</option>
          <option>ENGR</option>
          <option>ENVS</option>
          <option>FMST</option>
          <option>FREN</option>
          <option>GMST</option>
          <option>GREK</option>
          <option>GSST</option>
          <option>HIST</option>
          <option>INTP</option>
          <option>LATN</option>
          <option>LING</option>
          <option>MATH</option>
          <option>MUSI</option>
          <option>PEAC</option>
          <option>PHIL</option>
          <option>PHYS</option>
          <option>POLS</option>
          <option>PSYC</option>
          <option>RELG</option>
          <option>RUSS</option>
          <option>SOAN</option>
          <option>SOCI</option>
          <option>SPAN</option>
          <option>STAT</option>
          <option>THEA</option>
        </select>
      </div>
    </div>

    <br>

    <div class="form-group">
      <label for="select" class="col-lg-2 control-label">Course Number</label>
      <div class="col-lg-5">
        <select class="form-control" id="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <br>
      </div>
    </div>

    <br>

    <div class="form-group">
      <label for="inputCN" class="col-lg-2 control-label">Add Course Number</label>
      <div class="col-lg-5">
        <input type="text" class="form-control" id="inputCN" placeholder="Course Number">
      </div>
    </div>

    <br>

    <div class="form-group">
      <label for="inputPrice" class="col-lg-2 control-label">Selling Price</label>
      <div class="col-lg-5">
        <input type="text" class="form-control" id="inputPrice" placeholder="Price">
      </div>
    </div>

    <br>

    <div class="form-group">
      <label for="inputCondition" class="col-lg-2 control-label">Book Condition</label>
      <div class="col-lg-5">
        <input type="text" class="form-control" id="inputCondition" placeholder="Condition">
      </div>
    </div>

    <br>

    <div class="form-group">
      <label for="inputName" class="col-lg-2 control-label">Seller Name</label>
      <div class="col-lg-5">
        <input type="text" class="form-control" id="inputName" placeholder="Name">
      </div>
    </div>

    <br>

    <div class="form-group">
      <label for="inputContact" class="col-lg-2 control-label">Contact Info</label>
      <div class="col-lg-5">
        <input type="text" class="form-control" id="inputContact" placeholder="Email, etc.">
      </div>
    </div>

    <br>

    <div class="form-group">
      <label for="textArea" class="col-lg-2 control-label">Additional Comments</label>
      <div class="col-lg-5">
        <textarea class="form-control" rows="3" id="textArea"></textarea>
      </div>
    </div>

    <br>

    <div class="form-group">
      <div class="col-lg-5 col-lg-offset-2">
        <button class="btn btn-default">Cancel</button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </fieldset>
</form>

    <script src="jquery-2.1.3.js"></script>
    <script src="page.js"></script>
</body>
</html>