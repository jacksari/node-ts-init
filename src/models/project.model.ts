import { Schema, model } from 'mongoose';

export interface Project {
  name: string;
  description: string;
  created_at: any,
  updated_at: any,
}

const ProjectSchema = new Schema<Project>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },  
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
    default: Date.now(),
  },
}, { collection: 'projects' });

ProjectSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  // object.uid = _id;
  return object;
});

export default model('Project', ProjectSchema);
