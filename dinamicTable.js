function DinamicTable( col )
{
    if( col !== undefined && (col).constructor === Number )
    {
         this.col = col;
    }
    else {
      this.col = 4;
    }

    this.row = 1;
    this.actualRow = this.row-1;
    this.actualCol = 0;

    this.rep = [];
    this.rep.push(new Array());

    this.empty = true;
};

DinamicTable.prototype.addRow = function()
{
    this.rep.push(new Array());
    this.row++;
    this.actualRow++;
};

DinamicTable.prototype.addCol = function( count )
{
      try
      {
          if( count == undefined  )
          {
                this.col++;

                for( var i = 0; i < this.row; i++ )
                {
                     this.rep[i].push(null);
                }
          }
          else if( (count).constructor === Number )
          {
              this.col += count;

              for (var j = 0; j < count; j++ )
              {
                  for( var i = 0; i < this.row; i++ )
                  {
                       this.rep[i].push("null");
                  }
              }
          }
          else
          {
              throw "Invalid Type";
          }
      }
      catch (e)
      {
          console.log(e);
      }
};

DinamicTable.prototype.addItem = function( item )
{
      try
      {
          if ( this.isEmpty() )
          {
              this.empty = false;
          }
          if ( this.actualCol === this.col )
          {
              this.actualCol = 0;
              this.addRow();
          }

          if ( (item).constructor === Number || (item).constructor === String )
          {
              this.rep[this.actualRow].push(item);
              this.actualCol++;
          }
          else
          {
              throw "Invalid Type";
          }
      } catch (e)
      {
          console.log(e);
      }
}

DinamicTable.prototype.addItemAt = function( row, col, item )
{
      try
      {
         col--;
         row--;

        console.log(col+" - "+row);
        console.log(this.col+" - "+this.row);
        if ( this.isEmpty() )
        {
            this.empty = false;
        }

        if( col < this.col && row < this.row )
        {
            if ( (item).constructor === String || (item).constructor === Number  )
            {
                this.rep[row][col] = item ;
            }
            else
            {
                throw "Invalid Type is not String or Number";
            }
        }
        else
        {
           throw "Col or Row is less of size";
        }

      }
      catch (e)
      {
          console.log(e);
      }
}

DinamicTable.prototype.addItems = function( items )
{
      try
      {
          if ( this.isEmpty() )
          {
              this.empty = false;
          }

          if ( items instanceof Array )
          {
                this.addRow();

                if( items.length == this.col )
                {
                    for ( var i = 0; i < this.col; i++ )
                    {
                        this.rep[this.row-1].push(items[i]);
                    }
                }
                else
                {
                    throw "Invalid Type";
                }
          }
          else
          {
              throw "Invalid Type is not Array";
          }
      } catch (e)
      {
          console.log(e);
      }
};

DinamicTable.prototype.countRow = function()
{
      return this.row;
};

DinamicTable.prototype.countCol = function()
{
      return this.col;
};

DinamicTable.prototype.getActualRow = function()
{
      return this.actualRow;
};

DinamicTable.prototype.getItemCell = function( pos_row, pos_col )
{
      if( pos_col < this.col && pos_row < this.row )
      {
          return this.rep[pos_row][pos_col];
      }
};

DinamicTable.prototype.indexRowItemAtCol = function( item, col )
{
    var posRow = -1;

    if ( col < this.col  )
    {
        for( var index = 0; index < this.row; index++ )
        {
            if ( item == this.rep[index][col] )
            {
                posRow = index;
            }
        }
    }

    console.log( "In the position " + posRow + ".");

    return posRow;
}

DinamicTable.prototype.isEmpty = function()
{
      return this.empty;
};

DinamicTable.prototype.dump = function()
{
     if ( !this.isEmpty() )
     {
         for (var col = 0; col < this.row; col++)
         {
             for (var row = 0; row < this.col; row++)
             {
                document.writeln(this.rep[col][row] + " ");
             }
             document.writeln("<br>");
         }

     }
     else
     {
         document.writeln("Is Empty");
     }
};

DinamicTable.prototype.clear = function()
{
     if ( !this.isEmpty() )
     {
         this.rep = [];
         this.rep.push(new Array());

         this.empty = true;

         this.col = 4;

         this.row = 1;
         this.actualRow = this.row-1;
         this.actualCol = 0;
     }
     else
     {
         document.writeln("Is Empty");
     }
};

DinamicTable.prototype.removeRow = function(position)
{
     if ( !this.isEmpty() )
     {

         //this.rep.slice(position-1,1);
         this.rep.splice(position-1,1);
         this.row--;
         this.actualRow = this.row;
     }
     else
     {
         document.writeln("Is Empty");
     }
};

DinamicTable.prototype.removeColumn = function( position )
{
      if ( !this.isEmpty() )
      {
          this.rep.splice(position-1,1);
          this.col--;
          this.actualCol = this.row;

          for (var i = 0; i < rep.length; i++)
          {
              for (var i = 0; i < rep.length; i++)
              {
                  rep[i]
              }
          }
      }
      else
      {
          document.writeln("Is Empty");
      }
};

function Filter( col )
{
    if( col !== undefined && (col).constructor === Number )
    {
         this.col = col;
    }
    else {
      this.col = 4;
    }

    this.row = 1;
    this.actualRow = this.row-1;
    this.actualCol = 0;

    this.rep = [];
    this.rep.push(new Array());

    this.empty = true;
};
