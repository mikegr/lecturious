/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2009 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
   * Fabian Jakobs (fjakobs)

************************************************************************ */

qx.Class.define("qx.ui.virtual.form.ListItemCell",
{
  extend : qx.ui.virtual.cell.AbstractWidget,
  type : "singleton",

  members :
  {
    _createWidget : function() {
      return new qx.ui.form.ListItem();
    },


    updateData : function(widget, data) {
      widget.setLabel(data);
    }
  }
});