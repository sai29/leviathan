const mongoose = require('mongoose');
const Project = mongoose.model('Project');

exports.createProject = async (req, res) => {
	try {
		const project = await(new Project({ ...req.query, owner: req.user._id, domain: req.query.domain_id, })).save();
		res.json( { project });
	} catch (error) {
		res.status(500).json({ error: error.toString() });
	}
}

exports.updateProject = async (req, res) => {
	try {
		const project = await Project.findOneAndUpdate({ _id: req.params.id }, req.query, { new: true, runValidators: true}).exec();
		res.json( { project })
	} catch (error) {
		res.status(500).json( { error: error.toString() })
	}
}

exports.deleteProject = async (req, res) => {
	try {
		const project = await Project.findOneAndDelete({ _id: req.params.id })
		res.status(204).json( { message: 'Project deleted' } );

	} catch (error) {
		res.status(500).json({ error: error.toString() });
	}
}

exports.getProjectsbyDomain = async (req, res) => {
	try {
		const project = await Project.find({ domain: req.query.domain });
		res.json({ projects })
	} catch (error) {
		res.status(500).json({ error: error.toString() });
	}
}

exports.getProjectsByUser = async (req, res) => {
	try {
		const projects = await Project.find({ owner: req.user._id })
		res.json({ projects })
	} catch (error) {
		res.status(500).json({ error: error.toString() });
	}
}



