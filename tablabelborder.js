//   Less Tab Label Border - Epiphany Extension
//   Original python extension: Copyright (C) 2006  Stefan Stuhr
//
//   This program is free software; you can redistribute it and/or modify
//   it under the terms of the GNU General Public License as published by
//   the Free Software Foundation; either version 2 of the License, or
//   (at your option) any later version.
//
//   This program is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//   GNU General Public License for more details.
//
//   You should have received a copy of the GNU General Public License along
//   with this program; if not, write to the Free Software Foundation, Inc.,
//   51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

var tab_label_hborder = 1
var tab_label_vborder = 1

// extend into the outer reaches of space.
extension = {
	attach_window: function(window)
	{
		var notebook = window.get_notebook();

		window._tlb_tab_label_borders = new Array(notebook.tab_hborder, notebook.tab_vborder);

		notebook.set_tab_hborder(1);
		notebook.set_tab_vborder(1);
	},
	detach_window: function(window)
	{
		var notebook = window.get_notebook();
		var hborder = window._tlb_tab_label_borders[0];
		var vborder = window._tlb_tab_label_borders[1];

		notebook.set_tab_hborder(hborder);
		notebook.set_tab_hborder(vborder);

		delete window._tlb_tab_label_borders;
	}
}

