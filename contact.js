(function(){
  var html =
  '<div class="cm-overlay" id="contactModal" role="dialog" aria-modal="true" aria-labelledby="cmTitle">'+
  '<div class="cm-box">'+
  '<button class="cm-close" aria-label="Close">&times;</button>'+
  '<h3 id="cmTitle">Contact Vroom</h3>'+
  '<p>Email the team that can help you directly:</p>'+
  '<div class="cm-list">'+
  '<div class="cm-item"><span class="ci">🧍</span><div><strong>Passengers</strong><small>Rides, bookings, fares, lost items</small><a href="mailto:passengersupport@apanivroom.com">passengersupport@apanivroom.com</a></div></div>'+
  '<div class="cm-item"><span class="ci">🚗</span><div><strong>Drivers</strong><small>Driver sign-up, vehicles, earnings</small><a href="mailto:driversupport@apanivroom.com">driversupport@apanivroom.com</a></div></div>'+
  '<div class="cm-item"><span class="ci">📈</span><div><strong>Investor Relations</strong><small>Investment and partnership enquiries</small><a href="mailto:ir@apanivroom.com">ir@apanivroom.com</a></div></div>'+
  '<div class="cm-item"><span class="ci">💼</span><div><strong>Careers</strong><small>Job applications and hiring</small><a href="mailto:careers@apanivroom.com">careers@apanivroom.com</a></div></div>'+
  '</div></div></div>';
  function init(){
    document.body.insertAdjacentHTML('beforeend', html);
    var m = document.getElementById('contactModal');
    function open(e){ if(e){e.preventDefault();} m.classList.add('open'); }
    function close(){ m.classList.remove('open'); }
    m.addEventListener('click', function(e){ if(e.target===m || e.target.classList.contains('cm-close')) close(); });
    document.addEventListener('keydown', function(e){ if(e.key==='Escape') close(); });
    document.querySelectorAll('a[data-contact]').forEach(function(a){ a.addEventListener('click', open); });
    if (location.hash === '#contact') open();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
