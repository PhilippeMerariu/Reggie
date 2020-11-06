module.exports = {
    main: (channel, modifiers) => {
		let hao_str = 'H\n';
		hao_str += ':clap::clap:    :clap::clap:\n';
		hao_str += 'A\n';
		hao_str += ':clap::clap:    :clap::clap:\n';
		hao_str += 'O\n';
		hao_str += ':clap::clap:    :clap::clap:\n';
		hao_str += 'HAO';
		channel.send(hao_str);		
    },
    name: 'hao',
    type: 'active',
	desc: ' - r!hao \t--> :clap: H-A-O :clap:'
}