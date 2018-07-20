/*
 *    Copyright 2017 OICR
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import { DockstoreTool } from './../shared/swagger/model/dockstoreTool';
import { SourceFile } from './../shared/swagger/model/sourceFile';
import { Token } from './../shared/swagger/model/token';
import { Workflow } from './../shared/swagger/model/workflow';
import { WorkflowVersion } from '../shared/swagger';

export const updatedWorkflow: Workflow = {
    'descriptorType': 'cwl',
    'gitUrl': 'updatedGitUrl',
    'mode': Workflow.ModeEnum.FULL,
    'organization': 'updatedOrganization',
    'repository': 'updatedRepository',
    'workflow_path': 'updatedWorkflowPath',
    'workflowVersions': [],
    'defaultTestParameterFilePath': 'updatedTestParameterPath',
    'sourceControl': 'github.com',
    'source_control_provider': 'GITHUB'
};

export const sampleWorkflow1: Workflow = {
    id: 1,
    'descriptorType': 'cwl',
    'gitUrl': 'updatedGitUrl',
    'mode': Workflow.ModeEnum.FULL,
    'organization': 'updatedOrganization',
    'repository': 'updatedRepository',
    'workflow_path': 'updatedWorkflowPath',
    'workflowVersions': [],
    'defaultTestParameterFilePath': 'updatedTestParameterPath',
    'sourceControl': 'github.com',
    'source_control_provider': 'GITHUB'
};

export const sampleWorkflow2: Workflow = {
    id: 2,
    'descriptorType': 'cwl',
    'gitUrl': 'updatedGitUrl',
    'mode': Workflow.ModeEnum.FULL,
    'organization': 'updatedOrganization',
    'repository': 'updatedRepository',
    'workflow_path': 'updatedWorkflowPath',
    'workflowVersions': [],
    'defaultTestParameterFilePath': 'updatedTestParameterPath',
    'sourceControl': 'github.com',
    'source_control_provider': 'GITHUB'
};

export const sampleWorkflow3: Workflow = {
    id: 3,
    'descriptorType': 'cwl',
    'gitUrl': 'sampleGitUrl',
    'mode': Workflow.ModeEnum.FULL,
    'organization': 'sampleOrganization',
    'repository': 'sampleRepository',
    'workflow_path': 'sampleWorkflowPath',
    'workflowVersions': [],
    'defaultTestParameterFilePath': 'updatedTestParameterPath',
    'sourceControl': 'github.com',
    'source_control_provider': 'GITHUB',
    'full_workflow_path': 'github.com/sampleWorkflowPath'
};

export const sampleWdlWorkflow1: Workflow = {
  id: 4,
  'descriptorType': 'wdl',
  'gitUrl': 'sampleGitUrl',
  'mode': Workflow.ModeEnum.FULL,
  'organization': 'sampleOrganization',
  'repository': 'sampleRepository',
  'workflow_path': 'sampleWorkflowPath',
  'workflowVersions': [],
  'defaultTestParameterFilePath': 'updatedTestParameterPath',
  'sourceControl': 'github.com',
  'source_control_provider': 'GITHUB',
  'full_workflow_path': 'github.com/DataBiosphere/topmed-workflows/Functional_Equivalence'
};

export const sampleWorkflowVersion: WorkflowVersion = {
  'id': 1,
  'reference': '',
  'name': 'master'
};

export const sampleTool1: DockstoreTool = {
    id: 1,
    default_cwl_path: 'sampleDefaultCWLPath',
    default_dockerfile_path: 'sampleDefaultDockerfilePath',
    default_wdl_path: 'sampleDefaultWDLPath',
    gitUrl: 'sampleGitUrl',
    mode: DockstoreTool.ModeEnum.MANUALIMAGEPATH,
    name: 'sampleName',
    namespace: 'sampleNamespace',
    private_access: false,
    registry_string: 'quay.io',
    registry: DockstoreTool.RegistryEnum.QUAYIO,
    toolname: 'sampleToolname',
    defaultCWLTestParameterFile: 'sampleDefaultCWLTestParameterFile',
    defaultWDLTestParameterFile: 'sampleDefaultWDLTestParameterFile'
};

export const sampleTool2: DockstoreTool = {
    id: 2,
    default_cwl_path: 'sampleDefaultCWLPath',
    default_dockerfile_path: 'sampleDefaultDockerfilePath',
    default_wdl_path: 'sampleDefaultWDLPath',
    gitUrl: 'sampleGitUrl',
    mode: DockstoreTool.ModeEnum.MANUALIMAGEPATH,
    name: 'sampleName',
    namespace: 'sampleNamespace',
    private_access: false,
    registry_string: 'quay.io',
    registry: DockstoreTool.RegistryEnum.QUAYIO,
    toolname: 'sampleToolname',
    defaultCWLTestParameterFile: 'sampleDefaultCWLTestParameterFile',
    defaultWDLTestParameterFile: 'sampleDefaultWDLTestParameterFile'
};

export const sampleTool3: DockstoreTool = {
    id: 3,
    default_cwl_path: 'sampleDefaultCWLPath',
    default_dockerfile_path: 'sampleDefaultDockerfilePath',
    default_wdl_path: 'sampleDefaultWDLPath',
    gitUrl: 'sampleGitUrl',
    mode: DockstoreTool.ModeEnum.MANUALIMAGEPATH,
    name: 'sampleName',
    namespace: 'sampleNamespace',
    private_access: false,
    registry_string: 'quay.io',
    registry: DockstoreTool.RegistryEnum.QUAYIO,
    toolname: 'sampleToolname',
    defaultCWLTestParameterFile: 'sampleDefaultCWLTestParameterFile',
    defaultWDLTestParameterFile: 'sampleDefaultWDLTestParameterFile'
};

export const gitLabToken: Token = {
    'id': 4,
    'tokenSource': 'gitlab.com',
    'content': 'fakeGitLabToken',
    'username': 'fakeGitLabUsername',
    'refreshToken': null,
    'userId': 2,
};

export const gitHubToken: Token = {
    'id': 3,
    'tokenSource': 'github.com',
    'content': 'fakeGitHubToken',
    'username': 'fakeGitHubUsername',
    'refreshToken': null,
    'userId': 2,
};

export const bitbucketToken: Token = {
    'id': 2,
    'tokenSource': 'bitbucket.org',
    'content': 'fakeBitbucketToken',
    'username': 'fakeBitbucketUsername',
    'refreshToken': null,
    'userId': 2,
};

export const quayToken: Token = {
    'id': 1,
    'tokenSource': 'quay.io',
    'content': 'fakeQuayToken',
    'username': 'fakeQuayUsername',
    'refreshToken': null,
    'userId': 2,
};

export const sampleTag = {
    'reference': 'sampleReference',
    'image_id': 'sampleImageId',
    'name': 'sampleName'
};

export const wdlSourceFile: SourceFile = {
  content: 'task foo {}',
  id: 0,
  path: '',
  type: 'DOCKSTORE_WDL'
};

export const emptyWdlSourceFile: SourceFile = {
  content: '',
  id: 1,
  path: '/foo.wdl',
  type: 'DOCKSTORE_WDL'
};

export const wdlSourceFileWithHttpImport: SourceFile = {
  content: 'import http://example.com/foo',
  id: 2,
  path: '/goo.wdl',
  type: 'DOCKSTORE_WDL'
};

export const sampleSourceFile: SourceFile = {
  content: 'potato',
  id: 1,
  path: '/cwl.json',
  type: SourceFile.TypeEnum.CWLTESTJSON
};
