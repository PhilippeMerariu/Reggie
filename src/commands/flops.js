module.exports = {
    main: (channel, modifiers) => {
		let flop_str = 'F\n';
		flop_str += ':clap::clap:    :clap::clap:\n';
		flop_str += 'L\n';
		flop_str += ':clap::clap:    :clap::clap:\n';
		flop_str += 'O\n';
		flop_str += ':clap::clap:    :clap::clap:\n';
		flop_str += 'P\n';
		flop_str += ':clap::clap:    :clap::clap:\n';
		flop_str += 'Flopsssssss';
		channel.send(flop_str);		
    },
    name: 'flops',
    type: 'active',
	desc: ' - r!flops \t--> :clap: F - L - O - P - S :clap:'
}
