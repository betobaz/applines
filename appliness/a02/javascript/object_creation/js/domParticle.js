adc.domParticle = adc.particle.extend({
	render: function(){
		if(this.element === null){
			throw new Error("Element need to be a set on particle");
		}
		this.element.style.left = this.x + 'px';
		this.element.style.top = this.y + 'px';
	}
});