rateThis
========
rateThis is a jquery plugin that allows you to easy create rating functionality for your form.

Browser Support
--------

rateThis has been tested and should work in
- Internet Explorer 8+
- Safari
- Firefox
- Chrome
- Opera

Examples
--------

You can find some examples [here](http://www.michalkowalkowski.com/rateThis).

Usage
--------

Include the code before `</body>` tag

```html
<script src="/path/to/rateThis.min.js"></script>
```
  			
Then just add it to one of DOMs elements

```html
<script>
$('#elementsID').rateThis();
</script>
```			


API
--------
Settable Options
<table>
<thead>
<tr>
<th>Option</th>
<th>Description</th>
<th>Data Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>fullImg</td>
<td>Name of image file to use for displaying current rating</td>
<td>string</td>
<td>'full.png'</td>
</tr>						
<tr>
<td>emptyImg</td>
<td>Name of image file to use for displaying possible rating</td>
<td>string</td>
<td>'empty.png'</td>
</tr>						
<tr>
<td>zero</td>
<td>If true, will display image to set value of rating to zero</td>
<td>boolean</td>
<td>false</td>
</tr>						
<tr>
<td>zeroImg</td>
<td>Name of image file to use for displaying zero rating</td>
<td>string</td>
<td>'zero.png'</td>
</tr>					
<tr>
<td>value</td>
<td>Default value for rating</td>
<td>integer</td>
<td>1</td>
<tr>
</tr>	
<td>max</td>
<td>Max value for rating</td>
<td>integer</td>
<td>5</td>
</tr>	
<tr>
<td>hover</td>
<td>If true, will display image for highlighting current selected rating</td>
<td>boolean</td>
<td>true</td>
</tr>	
<tr>	
<td>hoverImg</td>
<td>Name of image file to use for displaying for highlight</td>
<td>string</td>
<td>'hover.png'</td>
</tr>	
<tr>	
<td>disabled</td>
<td>If true, rating will be displayed as disabled</td>
<td>boolean</td>
<td>false</td>	
</tr>	
<tr>
<td>disabledFullImg</td>
<td>Name of image file to use for displaying current rating when disabled</td>
<td>string</td>
<td>'full.png'</td>
</tr>						
<tr>
<td>disabledEmptyImg</td>
<td>Name of image file to use for displaying possible rating when disabled</td>
<td>string</td>
<td>'empty.png'</td>
</tr>						
<tr>
<td>disabledZeroImg</td>
<td>Name of image file to use for displaying zero rating when disabled</td>
<td>string</td>
<td>'zero.png'</td>
</tr>						
</tbody>
</table>

Methods

<table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>disable</td>
<td>Disables the rating</td>
</tr>						
<tr>
<td>enable</td>
<td>Enables the rating</td>
</tr>						
<tr>
<td>update</td>
<td>Updates plugin view, for new input value</td>
</tr>						
<tr>
<td>uncheck</td>
<td>Unchecks the checkbox</td>
</tr>						
<tr class="last">
<td>destroy</td>
<td>Removes plugin functionality</td>
</tr>						
</tbody>
</table>

				
License
-------
rateThis plugin is released under [MIT license](http://opensource.org/licenses/mit-license.php).

Credits
-------
rateThis plugin was created by [Michał Kowalkowski](https://github.com/michalkow). You can contact me at [kowalkowski.michal@gmail.com](mailto:kowalkowski.michal@gmail.com)
