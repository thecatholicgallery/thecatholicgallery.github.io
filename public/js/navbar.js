document.write('  <!-- NAVBAR -->\n')
document.write('  <section name="navbar">\n')
document.write(
	'  <nav class="navbar navbar-expand-lg navbar-light bg-yellow fixed-top">\n'
)
document.write(
	'    <a class="navbar-brand" href="../../">The Catholic Gallery</a>\n'
)
document.write(
	'    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\n'
)
document.write('      <span class="navbar-toggler-icon"></span>\n')
document.write('    </button>\n')
document.write('    <div class="collapse navbar-collapse" id="navbarNav">\n')
document.write('      <ul class="navbar-nav">\n')
document.write('        <li class="nav-item">\n')
document.write(
	'          <a class="nav-link" href="/categories/artwork">artwork</a>\n'
)
document.write('        </li>\n')
document.write('        <li class="nav-item">\n')
document.write(
	'          <a class="nav-link" href="/categories/photography">photography</a>\n'
)
document.write('        </li>\n')

document.write('        <li class="nav-item">\n')
document.write(
	'          <a class="nav-link" href="/categories/community">community</a>\n'
)
document.write('        </li>\n')
document.write('        <li class="nav-item">\n')
document.write(
	'          <a class="nav-link" href="https://github.com/gustavobecelli/The-Catholic-Gallery/#submit-an-image">submit an image</a>\n'
)
document.write('        </li>\n')
/*
document.write('        <li class="nav-item">\n')
document.write(
	'          <a class="nav-link" href="https://github.com/gustavobecelli/The-Catholic-Gallery">support us</a>\n'
)
document.write('        </li>\n')
document.write('        <li class="nav-item">\n')
document.write(
	'          <a class="nav-link" href="https://github.com/gustavobecelli/The-Catholic-Gallery">about</a>\n'
)
document.write('        </li>\n')
*/
document.write('      </ul>\n')
document.write('    </div>\n')
document.write('  </nav>\n')
document.write('</section><br><br><br>\n')
document.write('<!-- PAGE -->\n')
document.write('<section class="container-fluid">\n')
document.write('    <div class="row">\n')
document.write('        \n')
document.write('    </div>\n')
document.write('</section>\n')
document.write('\n')

navbarHighlight = (index) => {
	const navItem = document.getElementsByClassName('nav-item')[index]
	navItem.classList.add('active')
}
