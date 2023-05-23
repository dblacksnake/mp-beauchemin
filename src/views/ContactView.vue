<template>
    <vContainer>
        <h1 class="mb-10 mt-10">Contactez Mazout & Propane Beauchemin pour tous vos besoins
            de mazout et de chauffage à l'huile</h1>
        <VRow>
            <VCol lg="6" md="12" sm="12" cols="12">
                Merci de prendre le temps de nous écrire pour nous donner vos commentaires ou demande. Il nous fera plaisir de vous répondre le plus rapidement possible.
                <!-- <validation-observer
                    ref="observer"
                    id="validation-observer"
                    v-slot="{ invalid }"
                    >
                    <form @submit.prevent="submit()">
                        <validation-provider
                        v-slot="{ errors }"
                        name="Name"
                        rules="required|max:30"
                        >
                            <v-text-field
                                v-model="name"
                                :counter="10"
                                :error-messages="errors"
                                label="Nom*"
                                required
                            ></v-text-field>
                        </validation-provider>
                            <validation-provider
                            v-slot="{ errors }"
                            name="phoneNumber"
                            :rules="{
                                required: true,
                                digits: 10,
                            }"
                            >
                            <v-text-field
                                v-model="phoneNumber"
                                :counter="7"
                                :error-messages="errors"
                                label="Numéro de téléphone*"
                                required
                            ></v-text-field>
                            </validation-provider>
                            <validation-provider
                            v-slot="{ errors }"
                            name="email"
                            rules="required|email"
                            >
                            <v-text-field
                                v-model="emailAddress"
                                :error-messages="errors"
                                label="Adresse courriel*"
                                required
                            ></v-text-field>
                            </validation-provider>
                            <validation-provider
                            v-slot="{ errors }"
                            name="select"
                            rules="required"
                            >
                            <v-select
                                v-model="select"
                                :items="items"
                                :error-messages="errors"
                                label="Sujet du message*"
                                data-vv-name="select"
                                required
                            ></v-select>
                            </validation-provider>
                            <validation-provider
                        v-slot="{ errors }"
                        name="Comment"
                        rules="required|max:500"
                        >
                            <v-textarea
                                v-model="comment"
                                :counter="500"
                                :error-messages="errors"
                                label="Commentaires"
                                required
                            ></v-textarea>
                        </validation-provider>

                        <v-btn
                        class="mr-4"
                        type="submit"
                        :disabled="invalid"
                        >
                        submit
                        </v-btn>
                        <v-btn @click="clear">
                        clear
                        </v-btn>
                    </form>
                </validation-observer> -->
            </VCol>
            <VCol>
                <v-card min-height="250" elevation="0">
                    <v-card-title class="mx-auto" color="black">
                        <span style="color:black !important;">Général & urgence</span>
                    </v-card-title>
                    <v-card-text>
                        <span style="color:black"> Adresse</span>
                        <br>
                        775, rue Gaudette
                        <br>
                        St-Jean-sur-Richelieu, QC
                        <br>
                        J3B 7S7
                    </v-card-text>
                    <v-card-text>
                        Heure d’ouverture du bureau <br>
                        Du lundi au vendredi, 8 h 00 à 17 h<br>

                        Urgence tous les jours, 24 heures sur 24
                    </v-card-text>
                    <v-card-text>
                        <span style="color:black">Téléphone. 514-990-1901</span>
                        <br>
                        <span style="color:black">Télécopieur. 450 359-4431</span>
                        <br>
                        <span><a>info@mpbeauchemin.com</a></span>
                    </v-card-text>
                    <v-card-text>
                      <h4 style="text-align:left;">Modes de Paiement</h4>
                        <list :list="modesPaiement"></list>
                    </v-card-text>
                </v-card>
            </VCol>
        </VRow>
        <VRow class="mt-6">
          <VCol lg="4" md="12" sm="12" cols="12">
            <div class="contacts">
              <div class="contat"
              v-for="c in contacts" :key="c.title">
                <h4>{{c.title}}</h4>
                <span class="phone"><a :href="c.call">{{c.phone}}</a></span>
              </div>
            </div>
          </VCol>
          <VCol lg="4" md="12" sm="12" cols="12">
            <list :list="listPropane"></list>
          </VCol>
          <VCol lg="4" md="12" sm="12" cols="12">
            <list :list="listMazout"></list>
            <div style="color:red !important;">Nous ne desservons pas la Rive-Nord pour le Mazout</div>
          </VCol>
        </VRow>
    </vContainer>
  </template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';
// import {
//   required, digits, email, max, regex,
// } from 'vee-validate/dist/rules';
// import {
//   extend, ValidationObserver, ValidationProvider, setInteractionMode,
// } from 'vee-validate';
// import List from '@/components/List.vue';

// setInteractionMode('eager');

// extend('digits', {
//   ...digits,
//   message: 'Le numéro de téléphone doit contenir {length} chiffres. ({_value_})',
// });

// extend('required', {
//   ...required,
//   message: 'Cette entrée ne peut pas être vide.',
// });

// extend('max', {
//   ...max,
//   message: '{_field_} may not be greater than {length} characters',
// });

// extend('regex', {
//   ...regex,
//   message: '{_field_} {_value_} does not match {regex}',
// });

// extend('email', {
//   ...email,
//   message: 'Le email est invalide',
// });

const name = ref('');
    const phoneNumber = ref('');
    const emailAddress = ref('');
    const comment = ref('');
    let select = false;
    const checkbox = null

    const contacts = [
      {
        title: 'St-Jean-sur-Richelieu et environs :',
        phone: '450-359-4440',
        call: 'tel:450-359-4440',
      },
      {
        title: 'Farnham et environs :',
        phone: '450-293-0033',
        call: 'tel:450-293-0033',
      },
      {
        title: 'La Prairie et environs:',
        phone: '450-659-1340',
        call: 'tel:450-659-1340',
      },
      {
        title: 'Marieville et environs :',
        phone: '450-460-7128',
        call: 'tel:450-460-7128',
      },
      {
        title: 'Sans frais :',
        phone: '1-866-249-0033',
        call: 'tel:1-866-249-0033',
      },
    ];

    const listPropane = {
      title: 'Zones de service pour livraison de Propane',
      bullets: [
        'Rive-Nord (Terrebonne, Mascouche, Repentigny, Sainte-Thérèse, etc.',
        'Sherbrooke',
        'Rive-Sud de Montréal',
        'Saint-Jean-sur-Richelieu',
        'Montérégie',
        'Montréal',
        'Laval',
        'Saint-Hyacinthe',
        'Estrie',
      ],
    };

    const listMazout = {
      title: 'Zones de service pour livraison de Mazout',
      bullets: [
        'Saint-Jean-sur-Richelieu',
        'Rive-Sud de Montréal',
        'Montréal',
        'Montérégie',
        'Saint-Hyacinthe',
        'Estrie',
      ],
    };

    const modesPaiement = {
      bullets: [
        'Argent comptant, chèque et carte de crédit',
        'Paiement par internet',
        'Admissibilité au plan budgétaire de mai à septembre',
      ],
    };

    const submit = () => {
    //   refs.observer.validate();
      alert(name.value);
    };

    const clear = () => {
      name.value = '';
      phoneNumber.value = '';
      emailAddress.value = '';
      select = false;
    //   this.$refs.observer.reset();
    };

    const items = [
        'Demande de prix',
        'Service à la clientèle',
        'Facturation',
        'Question générale',
      ]
</script>

<!-- <script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    title: Yup.string()
        .required('Title is required'),
    firstName: Yup.string()
        .required('First Name is required'),
    lastName: Yup.string()
        .required('Last name is required'),
    dob: Yup.string()
        .required('Date of Birth is required')
        .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    acceptTerms: Yup.string()
        .required('Accept Ts & Cs is required')
});

function onSubmit(values) {
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4));
}
</script>

<template> -->
    <!-- <div class="card m-3">
        <h5 class="card-header">Vue 3 + VeeValidate - Form Validation Example (Composition API)</h5>
        <div class="card-body">
            <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                <div class="form-row">
                    <div class="form-group col">
                        <label>Title</label>
                        <Field name="title" as="select" class="form-control" :class="{ 'is-invalid': errors.title }">
                            <option value=""></option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Miss">Miss</option>
                            <option value="Ms">Ms</option>
                        </Field>
                        <div class="invalid-feedback">{{errors.title}}</div>
                    </div>
                    <div class="form-group col-5">
                        <label>First Name</label>
                        <Field name="firstName" type="text" class="form-control" :class="{ 'is-invalid': errors.firstName }" />
                        <div class="invalid-feedback">{{errors.firstName}}</div>
                    </div>
                    <div class="form-group col-5">
                        <label>Last Name</label>
                        <Field name="lastName" type="text" class="form-control" :class="{ 'is-invalid': errors.lastName }" />
                        <div class="invalid-feedback">{{errors.lastName}}</div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col">
                        <label>Date of Birth</label>
                        <Field name="dob" type="date" class="form-control" :class="{ 'is-invalid': errors.dob }" />
                        <div class="invalid-feedback">{{errors.dob}}</div>
                    </div>
                    <div class="form-group col">
                        <label>Email</label>
                        <Field name="email" type="text" class="form-control" :class="{ 'is-invalid': errors.email }" />
                        <div class="invalid-feedback">{{errors.email}}</div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col">
                        <label>Password</label>
                        <Field name="password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" />
                        <div class="invalid-feedback">{{errors.password}}</div>
                    </div>
                    <div class="form-group col">
                        <label>Confirm Password</label>
                        <Field name="confirmPassword" type="password" class="form-control" :class="{ 'is-invalid': errors.confirmPassword }" />
                        <div class="invalid-feedback">{{errors.confirmPassword}}</div>
                    </div>
                </div>
                <div class="form-group form-check">
                    <Field name="acceptTerms" type="checkbox" id="acceptTerms" value="true" class="form-check-input" :class="{ 'is-invalid': errors.acceptTerms }" />
                    <label for="acceptTerms" class="form-check-label">Accept Terms & Conditions</label>
                    <div class="invalid-feedback">{{errors.acceptTerms}}</div>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary mr-1">Register</button>
                    <button type="reset" class="btn btn-secondary">Reset</button>
                </div>
            </Form>
        </div>
    </div>    
</template> -->