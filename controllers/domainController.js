const mongoose = require('mongoose');
const Domain = mongoose.model('Domain');


exports.createDomain = async (req, res) => {
	try {
		console.log(req.body)
    const domain = await (new Domain(req.query)).save();
    res.json({ domain });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
  
};

exports.getDomains = async (req, res) => {
	try {
		const domains = await Domain.find()
		res.json( { domains} )
	} catch (error) {
		res.status(500).json( { error: error.toString() });
	}
}

exports.updateDomain = async (req, res) => {
	try {
		const domain = await Domain.findOneAndUpdate({ _id: req.params.id }, req.query, {
			new: true,
			runValidators: true}).exec();
		res.json( { domain })
		} catch (error) {
			res.status(500).json( { error: error.toString() });
		}
	}

exports.deleteDomain = async (req, res) => {
	try {
		const domain = await Domain.findOneAndDelete({ _id: req.params.id })
		res.json( { message: "Domain deleted"})
	} catch (error) {
		res.status(500).json({ error: error.toStringa() });
	}
}
